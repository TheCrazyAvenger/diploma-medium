import {
  checkCheckBox,
  showStatusPanel,
  showStatus,
  clearForms,
} from './formValidation';

const sendForm = () => {
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

  document.addEventListener('submit', (e) => {
    if (e.target.closest('form') !== null) {
      e.preventDefault();
      const formInputs = e.target.closest('form').querySelectorAll('input'),
        checkbox = e.target
          .closest('form')
          .querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked === false) {
        checkCheckBox(checkbox.nextSibling, 'red');
      } else {
        checkbox && checkCheckBox(checkbox.nextSibling, '');
        getData(e.target.closest('form'));
        clearForms(formInputs);
      }
    }
  });
};

export default sendForm;
