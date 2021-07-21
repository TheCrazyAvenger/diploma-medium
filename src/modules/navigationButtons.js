const navigationButtons = () => {
  const topArrow = document.getElementById('totop');

  const scrollAnim = (item) => {
    const blockID = item.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > 700) {
      topArrow.style.transform = 'translateY(0)';
    } else {
      topArrow.style.transform = 'translateY(45px)';
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('[data-scroll]')) {
      e.preventDefault();
      scrollAnim(target);
    }
    if (target.closest('#totop')) {
      e.preventDefault();
      scrollAnim(target.closest('#totop'));
    }
  });
};

export default navigationButtons;
