import { scrollAnim } from './animations';

export const popUpListener = (e) => {
  const target = e.target;

  if (
    target.matches('.close_icon, .close-btn') ||
    !target.closest('.form-content')
  ) {
    const popUp = target.closest('.popup');
    popUp.removeEventListener('click', popUpListener);
    popUp.classList.toggle('visible');
  }
};

export const menuListener = (e) => {
  const target = e.target,
    menu = document.querySelector('.popup-menu');

  if (target.matches('[data-scroll]')) {
    e.preventDefault();
    scrollAnim(target);
    menu.style.transform = 'translateX(100%)';
  }
};
