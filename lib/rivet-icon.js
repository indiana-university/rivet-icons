const prefix = 'rvt-icon'

window.customElements.define(prefix, class RivetIcon extends HTMLElement {
  static get observedAttributes() {
    return ['icon', 'icons'];
  }
  connectedCallback () {
    this.render()
  }
  attributeChangedCallback () {
    this.render()
  }
  render () {
    this.innerHTML = `<svg>${this.getSymbols()}</svg>`
  }
  getSymbols () {
    const icon = this.getAttribute('icon')
    const icons = this.getAttribute('icons')
    if (icon && !this.hasAttribute('icons')) {
      return `<use href="#${prefix}-${icon}"></use>`
    }
    if (!icons) {
      return `<use href="#${prefix}"></use>`
    }
    return icons
      .split(' ')
      .map((icon) => `<use href="#${prefix}-${icon}" style="opacity: max(0, min(var(--${prefix}), var(--${icon})) - max(var(--${prefix}), var(--${icon})) + 1)"></use>`)
      .join('')
  }
})
