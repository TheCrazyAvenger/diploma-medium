const chooseClub = () => {
  const clubSelect = document.querySelector('.club-select'),
    headMain = document.querySelector('.head-main'),
    clubVariants = clubSelect.querySelector('.club-variants');

  let animIterator,
    anim = 0;

  const animation = () => {
    animIterator = requestAnimationFrame(animation);
    anim += 0.1;
    if (anim <= 1) {
      clubVariants.style.opacity = `${anim}`;
    } else {
      cancelAnimationFrame(animIterator);
      anim = 0;
    }
  };

  const toogleClass = () => {
    clubVariants.classList.toggle('visible');
  };

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (
      target.closest('.club-select') &&
      !target.matches('.club-variants, .club-item')
    ) {
      toogleClass();
      animation();
    } else if (target.closest('.club-variants') === null) {
      clubVariants.classList.remove('visible');
    }
  });
};

export default chooseClub;
