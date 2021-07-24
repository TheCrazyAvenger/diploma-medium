export const scrollAnim = (item) => {
  const blockID = item.getAttribute('href').substr(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

let animIterator,
  anim = 0;

export const animClubSelect = () => {
  const clubVariants = document.querySelector('.club-variants');
  animIterator = requestAnimationFrame(animClubSelect);
  anim += 0.1;
  if (anim <= 1) {
    clubVariants.style.opacity = `${anim}`;
  } else {
    cancelAnimationFrame(animIterator);
    anim = 0;
  }
};
