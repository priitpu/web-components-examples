// no shadow dom

class MyAccordionLight extends HTMLElement {
  constructor() {
    super();
    // create wrapper
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'my-accordion');

    // create title element
    const title = wrapper.appendChild(document.createElement('h2'));
    title.setAttribute('class', 'my-accordion__title');
    title.textContent = this.getAttribute('data-title');
    title.addEventListener('click', () => {
      wrapper.classList.toggle('my-accordion--open');
    })

    // create content element
    const content = wrapper.appendChild(document.createElement('p'));
    content.setAttribute('class', 'my-accordion__content');
    content.textContent = this.getAttribute('data-content');

    //create styles
    const style = this.appendChild(document.createElement('style'));
    style.textContent = `
    .my-accordion {
      font-family: arial;
    }
    .my-accordion__title {
      font-size: 20px;
      border-bottom: 3px solid #eee;
      cursor: pointer;
      padding: 8px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      margin-bottom: 0;
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
    `;
    // append to host
    this.append(style, wrapper);
  }
}
customElements.define('my-accordion', MyAccordionLight);

// closed shadow dom

class MyAccordionShadowClosed extends HTMLElement {
  constructor() {
    super();
    // attach shadowDOM

    const shadow = this.attachShadow({mode: 'closed'});

    // create wrapper
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'my-accordion');

    // create title element
    const title = wrapper.appendChild(document.createElement('h2'));
    title.setAttribute('class', 'my-accordion__title');
    title.textContent = this.getAttribute('data-title');
    title.addEventListener('click', () => {
      wrapper.classList.toggle('my-accordion--open');
    })

    // create content element
    const content = wrapper.appendChild(document.createElement('p'));
    content.setAttribute('class', 'my-accordion__content');
    content.textContent = this.getAttribute('data-content');

    //create styles
    const style = this.appendChild(document.createElement('style'));
    style.textContent = `
    .my-accordion {
      font-family: arial;
    }
    .my-accordion__title {
      font-size: 20px;
      border-bottom: 3px solid #eee;
      cursor: pointer;
      padding: 8px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      margin-bottom: 0;
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
    `;
    // append to host
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
customElements.define('my-accordion-shadow-closed', MyAccordionShadowClosed);

class MyAccordionShadowOpen extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // create wrapper
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'my-accordion');

    // create title element
    const title = wrapper.appendChild(document.createElement('h2'));
    title.setAttribute('class', 'my-accordion__title');
    title.textContent = this.getAttribute('data-title');
    title.addEventListener('click', () => {
      wrapper.classList.toggle('my-accordion--open');
    })

    // create content element
    const content = wrapper.appendChild(document.createElement('p'));
    content.setAttribute('class', 'my-accordion__content');
    content.textContent = this.getAttribute('data-content');

    //create styles
    const style = this.appendChild(document.createElement('style'));
    style.textContent = `
    .my-accordion {
      font-family: arial;
    }
    .my-accordion__title {
      font-size: 20px;
      border-bottom: 3px solid #eee;
      cursor: pointer;
      padding: 8px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      margin-bottom: 0;
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
    `;
    // append to host
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
customElements.define('my-accordion-shadow-open', MyAccordionShadowOpen);
