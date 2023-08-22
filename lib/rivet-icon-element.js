const elementName = 'rvt-icon';
const attributeName = 'name';
const iconRegisteredEventName = `${elementName}-registered`;
const icons = new Map();
const iconsIndex = new Map();
const iconsSheet = new CSSStyleSheet();

// register()
// registerSVG()
// throw error if not SVG
export function registerIcon (name, icon) {
	const template = document.createElement('template');
	template.innerHTML = icon;
	icons.set(name, template);
	const index = icons.size;
	iconsIndex.set(index, name);
	iconsSheet.insertRule(`:host { --${name}: ${index}; }`);
	const event = new CustomEvent(iconRegisteredEventName, {
		detail: { name }
	});
	document.dispatchEvent(event);
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
		shadowRoot.adoptedStyleSheets = [iconsSheet];
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
