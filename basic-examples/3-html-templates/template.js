document.querySelector('button').addEventListener('click', () => {
  const template = document.querySelector('#text-block');
  document.body.appendChild(template.content.cloneNode(true));
})
