const sendForm = () => {
  const thanksPopUp = document.getElementById('thanks'),
    statusMessage = document.createElement('div');

  statusMessage.style.color = 'white';
  statusMessage.style.marginTop = '10px';

  const clearForms = (inputs) => {
    inputs.forEach((elem) => (elem.value = ''));
  };

  const postData = (body) => {
    return fetch('../server.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });
  };

  const getData = (currForm) => {
    currForm.appendChild(statusMessage);
    statusMessage.textContent = 'Загрузка...';
    const formData = new FormData(currForm);

    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((responce) => {
        if (responce.status !== 200) {
          throw new Error('Status network not 200');
        }
        thanksPopUp.classList.add('visible');
        currForm.closest('.popup').classList.remove('visible');
      })
      .catch(() => {
        statusMessage.textContent = 'Что-то пошло не так :(';
      });
  };

  document.addEventListener('submit', (e) => {
    if (e.target.closest('form') !== null) {
      e.preventDefault();
      const formInputs = e.target.closest('form').querySelectorAll('input');
      getData(e.target.closest('form'));
      clearForms(formInputs);
    }
  });
};

export default sendForm;
