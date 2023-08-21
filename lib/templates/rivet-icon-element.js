const elementName = 'ICON_NAMESPACE';
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
	#sensor
	#teardown

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
	}

	connectedCallback () {
		const update = this.#update.bind(this);
		this.#sensor.addEventListener('transitionstart', update);
		document.addEventListener(iconRegisteredEventName, update);
		this.#teardown = () => {
			this.#sensor.removeEventListener('transitionstart', update);
			document.removeEventListener(iconRegisteredEventName, update);
		}
		update();
	}

	disconnectedCallback () {
		this.#teardown();
	}

	attributeChangedCallback () {
		this.#update();
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
