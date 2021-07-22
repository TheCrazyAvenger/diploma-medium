import { popUpListener } from './formValidation';

const togglePopUp = () => {
  const header = document.querySelector('.header-main'),
    menu = document.querySelector('.popup-menu');

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target.getAttribute('data-popup')) {
      const popUpId = target.getAttribute('data-popup').substr(1),
        currPopUp = document.getElementById(`${popUpId}`);

      currPopUp.addEventListener('click', popUpListener);
      currPopUp.classList.add('visible');
    }
    if (target.closest('.menu-button')) {
      menu.style.transform = 'translateX(0)';
    }
    if (target.closest('.close-menu-btn')) {
      menu.style.transform = 'translateX(100%)';
    }
  });
};

export default togglePopUp;
