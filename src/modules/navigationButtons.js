import { scrollAnim, animClubSelect } from './animations';

const navigationButtons = () => {
  const topArrow = document.getElementById('totop'),
    topMenu = document.querySelector('.top-menu'),
    header = document.querySelector('.header-main'),
    toTop = document.getElementById('totop'),
    clubSelect = document.querySelector('.club-select'),
    clubVariants = clubSelect.querySelector('.club-variants');

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (clubVariants.classList.contains('visible'))
      clubVariants.classList.remove('visible');

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

  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('[data-scroll]')) {
      e.preventDefault();
      scrollAnim(target);
    }
    if (
      target.closest('.club-select') &&
      !target.matches('.club-variants, .club-item')
    ) {
      clubVariants.classList.toggle('visible');
      animClubSelect();
    } else if (target.closest('.club-variants') === null) {
      clubVariants.classList.remove('visible');
    }
  });

  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    scrollAnim(toTop);
  });
};

export default navigationButtons;
