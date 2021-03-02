// custom element lifecycle

class MyLifecycle extends HTMLElement {
  constructor() {
    super();
  }
  updateStyle = (styles) => {
    this.style.color = styles?.color;
    this.style.fontSize = styles?.size;
  }
  connectedCallback() {
    console.log('Lifecycle component is added to the page');
  }
  disconnectedCallback() {
    console.log('Lifecycle element removed from page');
  }
  static get observedAttributes() { return ['color', 'size']; }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Lifecycle element attributes changed.');
    console.info({
      name,
      oldValue,
      newValue
    })
    this.updateStyle({[name]: newValue});
  }
}
customElements.define('my-lifecycle', MyLifecycle);

document.querySelector('button').addEventListener('click', () => {
  document.body.removeChild(document.querySelector('my-lifecycle'));
})
