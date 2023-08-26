import Swiper from '../../vendor/swiper';

const createTourSlider = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-tours', {
    navigation: {
      nextEl: '.tours__swiper-next',
      prevEl: '.tours__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // slidesPerColumn: 1,
      },
      768: {
        slidesPerView: 2,
        // slidesPerColumn: 1,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        // slidesPerColumn: 1,
        spaceBetween: 30,
      },
    },
  });
};

export {createTourSlider};