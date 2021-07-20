export const checkCheckBox = (elem, color) => {
  elem.style.color = color;
};

export const showStatusPanel = (form) => {
  const thanksPopUp = document.getElementById('thanks');
  if (form.closest('.popup'))
    form.closest('.popup').classList.remove('visible');
  thanksPopUp.classList.add('visible');
};

export const showStatus = (title, text) => {
  const thanksPopUp = document.getElementById('thanks'),
    statusContent = thanksPopUp.childNodes[3].childNodes[3],
    statusHeader = statusContent.childNodes[1],
    statusMessage = statusContent.childNodes[3];

  statusHeader.textContent = title;
  statusMessage.innerHTML = text;
};

export const clearForms = (inputs) => {
  inputs.forEach((elem) => {
    if (elem.type === 'text' || elem.type === 'tel') elem.value = '';
    if (elem.type === 'checkbox') elem.checked = false;
  });
};
