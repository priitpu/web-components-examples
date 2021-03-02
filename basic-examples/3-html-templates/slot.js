class MyAccordion extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // create wrapper
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'my-accordion');

    // create title wrapper
    const titleWrapper = wrapper.appendChild(document.createElement('div'));
    titleWrapper.setAttribute('class', 'my-accordion__title');
    titleWrapper.addEventListener('click', () => {
      wrapper.classList.toggle('my-accordion--open');
    })

    // create title slot
    const title = titleWrapper.appendChild(document.createElement('slot'));
    title.setAttribute('name', 'title');

    // create title wrapper
    const contentWrapper = wrapper.appendChild(document.createElement('div'));
    contentWrapper.setAttribute('class', 'my-accordion__content');

    // create content slot
    const content = contentWrapper.appendChild(document.createElement('slot'));
    content.setAttribute('name', 'content');

    const footer = wrapper.appendChild(document.createElement('div'));
    footer.setAttribute('class', 'my-accordion__footer');

    footer.appendChild(document.createElement('slot'))

    //create styles
    const style = this.appendChild(document.createElement('style'));
    style.textContent = `
    .my-accordion {
      font-family: arial;
    }
    .my-accordion__title {
      border-bottom: 3px solid #eee;
      cursor: pointer;
      display: flex;
      align-items: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .my-accordion__title ::slotted(*) {
      padding: 8px;
      margin-bottom: 0;
      font-size: 20px;
    }
    .my-accordion__title:hover {
      background-color: #c2c2c2;
    }
    .my-accordion__content {
      font-size: 14px;
      display: none;
      padding: 12px;
      border: 3px solid #eee;
      border-top: 0;
      margin-top: 0;
    }
    .my-accordion--open .my-accordion__content {
      display: block;
    }
    .my-accordion__footer {
      padding: 8px;
      display: flex;
      justify-content: space-between;
    }
    .my-accordion__footer ::slotted(p) {
      font-size: 10px;
    }
    `;

    // append to host
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
customElements.define('my-accordion', MyAccordion);
