import { popUpListener } from './listeners';

export const checkCheckBox = (elem, color) => {
  elem.style.color = color;
};

export const showStatusPanel = (form) => {
  const thanksPopUp = document.getElementById('thanks');

  if (form.closest('.popup'))
    form.closest('.popup').classList.remove('visible');

  thanksPopUp.classList.add('visible');
  thanksPopUp.addEventListener('click', popUpListener);
};

export const showStatus = (title, text) => {
  const statusHeader = document.querySelector('.form-title'),
    statusMessage = document.querySelector('.form-text');

  statusHeader.textContent = title;
  statusMessage.innerHTML = text;
};

export const clearForms = (inputs) => {
  inputs.forEach((elem) => {
    if (elem.type === 'text' || elem.type === 'tel') elem.value = '';
    if (elem.type === 'checkbox') elem.checked = false;
  });
};
