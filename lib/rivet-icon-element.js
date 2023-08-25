const elementName = 'rvt-icon';
const attributeName = 'name';
const iconRegisteredEventName = 'rvtIconRegistered';
const icons = new Map();
const iconsIndex = new Map();

// Until adoptedStyleSheets has wider Safari adoption,
// append a global <style> element in <head>.
// Add a data-rvt-icon attribute so users know
// from where the element was generated.
// https://caniuse.com/?search=adoptedStyleSheets
const style = document.createElement('style');
style.setAttribute(`data-${elementName}`, '');
document.head.appendChild(style);
const iconsSheet = style.sheet;

// register()
// registerSVG()
export function registerIcon (name, content) {
	const errorMessagePrefix = 'Rivet Icon';
	if (!name || typeof name !== 'string') {
		throw new Error(`${errorMessagePrefix}: Name must be a string.`)
	}
	const template = document.createElement('template');
	template.innerHTML = content;
	if (template.content.children.length !== 1) {
		throw new Error(`${errorMessagePrefix} (${name}): Content must contain one SVG element.`)
	}
	if (template.content.firstChild.nodeName.toLowerCase() !== 'svg') {
		throw new Error(`${errorMessagePrefix} (${name}): Content must be a SVG element.`)
	}
	icons.set(name, template);
	const index = icons.size;
	iconsIndex.set(index, name);
	iconsSheet.insertRule(`${elementName} { --${name}: ${index}; }`);
	const event = new CustomEvent(iconRegisteredEventName, {
		detail: { name }
	});
	document.dispatchEvent(event);
}

export function getIcons () {
	return [...icons.keys()];
}

const iconTemplate = document.createElement('template');
iconTemplate.innerHTML = `
	<style>
		:host,
		.container {
			display: inline-flex;
		}
		.sensor {
			position: absolute;
			transition: z-index 0.001ms step-start;
			visibility: hidden;
			z-index: var(--name);
		}
		.alt {
			display: block;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			position: absolute;
			width: 1px;
		}
	</style>
	<span class="container"></span>
	<span class="sensor"></span>
	<slot class="alt"></slot>
`; 

class RivetIconElement extends window.HTMLElement {
	#container
	#name
	#requestUpdate
	#sensor

	static get observedAttributes () {
		return [attributeName]
	}

	constructor () {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(iconTemplate.content.cloneNode(true));
		this.#container = shadowRoot.querySelector('.container');
		this.#sensor = shadowRoot.querySelector('.sensor');
		this.#requestUpdate = throttleRAF(this.#update.bind(this));
	}

	connectedCallback () {
		this.#sensor.addEventListener('transitionstart', this.#requestUpdate);
		document.addEventListener(iconRegisteredEventName, this.#requestUpdate);
		this.#requestUpdate();
	}

	disconnectedCallback () {
		this.#sensor.removeEventListener('transitionstart', this.#requestUpdate);
		document.removeEventListener(iconRegisteredEventName, this.#requestUpdate);
	}

	attributeChangedCallback () {
		this.#requestUpdate();
	}

	#getNameFromCSS () {
		if (!this.#sensor) {
			return;
		}
		const index = window.getComputedStyle(this.#sensor).getPropertyValue(`--${attributeName}`);
		return iconsIndex.get(parseInt(index));
	}

	#update () {
		const name = this.#getNameFromCSS() || this.getAttribute(attributeName);
		if (!this.#container || !icons.has(name) || this.#name === name) {
			return;
		}
		const node = icons.get(name).content.cloneNode(true);
		this.#container.replaceChildren(node);
		const svg = this.#container.querySelector('svg');
		svg.setAttribute('aria-hidden', 'true');
		svg.setAttribute('focusable', 'false');
		this.#name = name;
	}
}

window.customElements.define(elementName, RivetIconElement);

// Call the function at most once per animation frame.
function throttleRAF (fn) {
	let wait = false;
	return function (...args) {
		if (wait) {
			return;
		}
		wait = true;
		window.requestAnimationFrame(() => {
			fn.call(this, ...args);
			wait = false;
		});
	}
}
