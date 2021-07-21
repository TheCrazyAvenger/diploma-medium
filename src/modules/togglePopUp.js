const togglePopUp = () => {
  const header = document.querySelector('.header-main'),
    popUps = document.querySelectorAll('.popup'),
    gift = document.querySelector('.fixed-gift'),
    menu = document.querySelector('.popup-menu');

  const openPopUp = (id) => {
    const item = document.getElementById(`${id}`);

    item.classList.add('visible');
  };

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target.getAttribute('data-popup')) {
      const popUp = target.getAttribute('data-popup').substr(1);
      openPopUp(popUp);
    }
    if (target.closest('.menu-button')) {
      menu.style.transform = 'translateX(0)';
    }
    if (target.closest('.close-menu-btn')) {
      menu.style.transform = 'translateX(100%)';
    }
  });

  popUps.forEach((item) =>
    item.addEventListener('click', (e) => {
      const target = e.target;

      if (
        target.matches('.close_icon, .close-btn') ||
        !target.closest('.form-content')
      ) {
        target.closest('.popup').classList.remove('visible');
      }
    })
  );

  if (gift) {
    gift.addEventListener('click', (e) => {
      popUps[3].classList.toggle('visible');
      gift.style.display = 'none';
    });
  }
};

export default togglePopUp;
