const namespace = 'rvt-icon'
const prefix = `${namespace}-`
const iconVar = `--${namespace}`
const icons = [...document.querySelectorAll(`symbol[id^="${prefix}"]`)]
  .map(({ id }) => id.replace(prefix, ''))
const cssVars = icons
  .map((icon, i) => `  --${icon}: ${i};`)
  .join('\n')

const style = document.createElement('style')
style.innerHTML = `${namespace} {\n${cssVars}\n}`
document.head.appendChild(style)

class RivetIconElement extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }
  connectedCallback () {
    this.innerHTML = `
      <svg aria-hidden="true"><use></use></svg>
      <span></span>
    `
    this._symbol = this.querySelector('use')
    this._sensor = this.querySelector('span')
    this._sensor.style.cssText = `
      position: absolute;
      transition: z-index 0.001ms step-start;
      visibility: hidden;
      z-index: var(${iconVar});
    `
    this._sensor.addEventListener('transitionstart', this.update.bind(this))
    this.update()
  }
  disconnectedCallback () {
    this.innerHTML = ''
  }
  attributeChangedCallback () {
    this.render()
  }
  update () {
    const value = getComputedStyle(this._sensor).getPropertyValue(iconVar)
    const index = parseInt(value.trim())
    this._name = icons[index]
    this.render()
  }
  render () {
    const name = this._name || this.getAttribute('name')
    if (this._symbol && name) {
      this._symbol.setAttribute('href', `#${prefix}${name}`)
    }
  }
}

window.customElements.define(namespace, RivetIconElement)
