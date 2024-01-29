import './rivet-icon-element.css';

const packageName = 'Rivet Icons';
const elementName = 'rvt-icon';
const nameAttributeName = 'name';
const registeredEventName = 'rvtIconRegistered';
const requestUpdateFromEventType = 'transitionrun';
const size = 16;
const indexToNameMap = new Map();
const nameToTemplateMap = new Map();

// Until adoptedStyleSheets has wider Safari adoption,
// append a global <style> element in <head>.
// Add a data-rvt-icon attribute so users know
// from where the element was generated.
// https://caniuse.com/?search=adoptedStyleSheets
const style = document.createElement('style');
style.setAttribute(`data-${elementName}`, '');
document.head.appendChild(style);

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

class RivetIconElement extends window.HTMLElement {
	#name;
	#requestUpdate = throttleRAF(this.#update.bind(this));

	static get observedAttributes () {
		return [nameAttributeName];
	}

	attributeChangedCallback () {
		this.#requestUpdate();
	}

	connectedCallback () {
		document.addEventListener(registeredEventName, this.#requestUpdate);
		this.addEventListener(requestUpdateFromEventType, this.#requestUpdate);
		this.#requestUpdate();
	}

	disconnectedCallback () {
		document.removeEventListener(registeredEventName, this.#requestUpdate);
		this.removeEventListener(requestUpdateFromEventType, this.#requestUpdate);
	}

	#getNameFromCSS () {
		const svg = this.querySelector('svg');
		if (!svg) {
			return;
		}
		const index = window.getComputedStyle(svg).getPropertyValue(`--${nameAttributeName}`);
		return indexToNameMap.get(parseInt(index));
	}

	#update () {
		const name = this.#getNameFromCSS() || this.getAttribute(nameAttributeName);
		if (!nameToTemplateMap.has(name) || this.#name === name) {
			return;
		}
		const content = nameToTemplateMap.get(name).content.cloneNode(true);
		this.replaceChildren(content);
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
