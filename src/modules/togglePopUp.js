import { popUpListener, menuListener } from './listeners';

const togglePopUp = () => {
  const header = document.querySelector('.header-main'),
    menu = document.querySelector('.popup-menu'),
    gift = document.getElementById('fgift');

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
      menu.addEventListener('click', menuListener);
    }
    if (target.closest('.close-menu-btn')) {
      menu.style.transform = 'translateX(100%)';
      menu.removeEventListener('click', menuListener);
    }
  });

  const openGift = () => {
    const giftPopUp = document.getElementById(`${gift.id.substr(1)}`);

    giftPopUp.classList.add('visible');
    giftPopUp.addEventListener('click', popUpListener);
    gift.style.display = 'none';
    gift.removeEventListener('click', openGift);
  };

  if (gift) gift.addEventListener('click', openGift);
};

export default togglePopUp;
