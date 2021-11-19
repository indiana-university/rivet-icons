const namespace = 'rvt-icon'
const iconVar = `--${namespace}`

class RivetIconElement extends window.HTMLElement {
  static get observedAttributes () {
    return ['name']
  }

  connectedCallback () {
    this.render()
  }

  attributeChangedCallback () {
    this.render()
  }

  render () {
    const name = this.getAttribute('name')
    if (name) {
      this.style.setProperty(iconVar, `var(--${name})`)
    } else {
      this.style.removeProperty(iconVar)
    }
  }
}

window.customElements.define(namespace, RivetIconElement)
