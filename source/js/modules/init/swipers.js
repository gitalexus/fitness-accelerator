import Swiper from '../../vendor/swiper';

const jurySliderSelector = '[data-swiper-jury]';
const reviewsSliderSelector = '[data-swiper-reviews]';

const jurySliderOptions = {
  navigation: {
    nextEl: '[data-button="next-jury"]',
    prevEl: '[data-button="prev-jury"]',
  },
  slidesPerView: 4,
  loop: true,
  spaceBetween: 40,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false,
    },
  },
};

const reviewsSliderOptions = {
  navigation: {
    nextEl: '[data-button-next-reviews]',
    prevEl: '[data-button-prev-reviews]',
  },
  slidesPerView: 1,
  loop: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};


function initSlider(sliderSelector, options) {
  if (!document.querySelector(sliderSelector)) {
    return null;
  }
  return new Swiper(sliderSelector, options);
}

function initSliders() {
  initSlider(jurySliderSelector, jurySliderOptions);
  initSlider(reviewsSliderSelector, reviewsSliderOptions);

  // добавляем возможность фокуса на слайды
  const slides = document.querySelectorAll('[data-slide]');
  slides.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
  // убираем возможность фокуса с дубликатов слайдов автоматически создаваемых swiper
  const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
  duplicates.forEach((duplicate) => {
    duplicate.setAttribute('tabindex', '-1');
  });
}

export {initSliders};
