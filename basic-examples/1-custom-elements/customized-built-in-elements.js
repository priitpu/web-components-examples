// no shadow dom, just a custom element

class MyFancyParagraph extends HTMLParagraphElement {
  constructor() {
    super();
    this.style.fontFamily = "arial";
    this.style.fontWeight = "bold";
    window.setInterval(() => {
      this.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }, 50)
  }
}
customElements.define('my-fancy-paragraph', MyFancyParagraph, { extends: 'p' });
