import {
  checkCheckBox,
  showStatusPanel,
  showStatus,
  clearForms,
} from './uniteFuncs';

const sendForm = () => {
  const forms = document.querySelectorAll('[data-form]');

  const postData = (body) => {
    return fetch('../server.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });
  };

  const getData = (currForm) => {
    showStatusPanel(currForm);
    showStatus('Загрузка', 'Отправляем данные...');

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
        showStatus(
          'Спасибо',
          `Ваша заявка отправлена.
          <br>
          Мы свяжемся с вами в ближайшее время.`
        );
      })
      .catch(() => {
        showStatus('Ошибка', 'Что-то пошло не так :(');
      });
  };

  forms.forEach((form) =>
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formInputs = form.querySelectorAll('input'),
        checkbox = form.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked === false) {
        checkCheckBox(checkbox.nextSibling, 'red');
      } else {
        checkbox && checkCheckBox(checkbox.nextSibling, '');
        getData(form);
        clearForms(formInputs);
      }
    })
  );
};

export default sendForm;
