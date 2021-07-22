import { popUpListener } from './formValidation';

const navigationButtons = () => {
  const topArrow = document.getElementById('totop'),
    menu = document.querySelector('.popup-menu'),
    topMenu = document.querySelector('.top-menu');

  const scrollAnim = (item) => {
    const blockID = item.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > 300) {
      topMenu.style.position = 'fixed';
      topMenu.style.transform = 'translateY(-100%)';
    }
    if (scroll < 300) {
      topMenu.style.transition = '';
      topMenu.style.position = '';
      topMenu.style.transform = 'translateY(0%)';
    }
    if (scroll > 586) {
      topMenu.style.transition = 'transform .15s linear';
      topMenu.style.transform = 'translateY(0%)';
      topArrow.style.transform = 'translateY(0%)';
    } else {
      topArrow.style.transform = 'translateY(45px)';
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('[data-scroll]')) {
      e.preventDefault();
      scrollAnim(target);
      menu.style.transform = 'translateX(100%)';
    }
    if (target.closest('#totop')) {
      e.preventDefault();
      scrollAnim(target.closest('#totop'));
    }
    if (target.closest('#fgift')) {
      const gift = document.getElementById(
        `${target.closest('#fgift').id.substr(1)}`
      );
      gift.classList.add('visible');
      gift.addEventListener('click', popUpListener);
      target.closest('#fgift').style.display = 'none';
    }
  });
};

export default navigationButtons;
