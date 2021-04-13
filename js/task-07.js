const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const FontSize = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener('input', FontSize);
