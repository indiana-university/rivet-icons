import './rivet-icon-element.css';

const packageName = 'Rivet Icons';
const elementName = 'rvt-icon';
const nameAttributeName = 'name';
const registeredEventName = 'rvtIconRegistered';
const size = 16;
const indexToNameMap = new Map();
const nameToTemplateMap = new Map();

const elementTemplate = document.createElement('template');
elementTemplate.innerHTML = `
<span class="container"></span>
<span class="sensor"></span>
`;

/*
<style>
:host,
.container {
	display: inline-flex;
}
.sensor {
	position: absolute;
	transition: z-index 0.001ms step-start;
	visibility: hidden;
	z-index: var(--${nameAttributeName});
}
</style>
*/

// Until adoptedStyleSheets has wider Safari adoption,
// append a global <style> element in <head>.
// Add a data-rvt-icon attribute so users know
// from where the element was generated.
// https://caniuse.com/?search=adoptedStyleSheets
const style = document.createElement('style');
style.setAttribute(`data-${elementName}`, '');
document.head.appendChild(style);

export function getIcons () {
	return [...nameToTemplateMap.keys()];
}

export function registerIcon (name, content) {
	if (!name || typeof name !== 'string') {
		throw new Error(`${packageName}: Name must be a string.`);
	}
	const template = document.createElement('template');
	template.innerHTML = content;
	if (template.content.children.length !== 1) {
		throw new Error(`${packageName} (${name}): Content must contain one SVG element.`);
	}
	const svg = template.content.firstChild;
	if (svg.nodeName.toLowerCase() !== 'svg') {
		throw new Error(`${packageName} (${name}): Content must be a SVG element.`);
	}
	setDefaultAttributes(svg, {
		'aria-hidden': 'true',
		fill: 'currentColor',
		focusable: 'false',
		height: size,
		viewBox: `0 0 ${size} ${size}`,
		width: size,
		xmlns: 'http://www.w3.org/2000/svg'
	});
	nameToTemplateMap.set(name, template);
	const index = nameToTemplateMap.size;
	indexToNameMap.set(index, name);
	style.sheet.insertRule(`${elementName} { --${name}: ${index}; }`);
	const event = new CustomEvent(registeredEventName, {
		detail: { name }
	});
	document.dispatchEvent(event);
}

export class RivetIconElement extends window.HTMLElement {
	#container;
	#name;
	#requestUpdate;
	#sensor;

	static get observedAttributes () {
		return [nameAttributeName];
	}

	constructor () {
		super();
		//const shadowRoot = this.attachShadow({ mode: 'open' });
		//shadowRoot.appendChild(elementTemplate.content.cloneNode(true));
		this.replaceChildren(elementTemplate.content.cloneNode(true));
		this.#container = this.querySelector('.container');
		this.#sensor = this.querySelector('.sensor');
		console.log('##', this.#container, this.#sensor)
		//this.#container = shadowRoot.querySelector('.container');
		//this.#sensor = shadowRoot.querySelector('.sensor');
		this.#requestUpdate = throttleRAF(this.#update.bind(this));
	}

	connectedCallback () {
		this.#sensor.addEventListener('transitionrun', this.#requestUpdate);
		document.addEventListener(registeredEventName, this.#requestUpdate);
		this.#requestUpdate();
	}

	disconnectedCallback () {
		this.#sensor.removeEventListener('transitionrun', this.#requestUpdate);
		document.removeEventListener(registeredEventName, this.#requestUpdate);
	}

	attributeChangedCallback () {
		this.#requestUpdate();
	}

	#getNameFromCSS () {
		if (!this.#sensor) {
			return;
		}
		const index = window.getComputedStyle(this.#sensor).getPropertyValue(`--${nameAttributeName}`);
		return indexToNameMap.get(parseInt(index));
	}

	#update () {
		const name = this.#getNameFromCSS() || this.getAttribute(nameAttributeName);
		if (!this.#container || !nameToTemplateMap.has(name) || this.#name === name) {
			return;
		}
		const svg = nameToTemplateMap.get(name).content.cloneNode(true);
		this.#container.replaceChildren(svg);
		this.#name = name;
	}
}

window.customElements.define(elementName, RivetIconElement);

//
// Utilities
//

function setDefaultAttribute (element, name, value) {
	if (!element.hasAttribute(name)) {
		element.setAttribute(name, value);
	}
}

function setDefaultAttributes (element, attributes) {
	Object.entries(attributes).forEach(([name, value]) => {
		setDefaultAttribute(element, name, value);
	});
}

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
	};
}
