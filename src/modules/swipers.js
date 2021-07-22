import Swiper from 'swiper/bundle';

const swipers = () => {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      400: {
        slidesPerView: 2,
      },

      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper1 = new Swiper('.swiper-gallery', {
    slidesPerView: 'auto',
    centeredSlides: true,
    slideActiveClass: 'slide-gallery-active',
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 9000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
  });

  const mainSlider = document.querySelector('.main-slider');
  const slides = mainSlider.querySelectorAll('.slide');
  let currSlide = 0;
  const swiper3 = () => {
    setInterval(() => {
      if (currSlide === 4) {
        currSlide = 0;
        slides[0].style.display = 'flex';
        slides[4].style.display = 'none';
      } else {
        currSlide++;
        slides[currSlide - 1].style.display = 'none';
        slides[currSlide].style.display = 'flex';
      }
    }, 5000);
  };

  swiper3();
};

export default swipers;
