import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {addToggleMenu} from './modules/header/toggle';
import {initVideoPlayer} from './modules/hero/videoplayer';
import {initAudioPlayer} from './modules/hero/audioplayer';
import {initSwiperHero} from './modules/hero/hero-slider';
import {createTourSlider} from './modules/tours/tours';
import {createEducationSlider} from './modules/education/education';
import {createReviewsSlider} from './modules/reviews/reviews';
import {createAdvantagesSlider} from './modules/advantages/advantages';
import {createPhotogallerySlider} from './modules/photogallery/photogallery';
import {initLeaflet} from './modules/leaflet/leaflet';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  addToggleMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initVideoPlayer();
    initAudioPlayer();
    initSwiperHero();
    createTourSlider();
    createEducationSlider();
    createReviewsSlider();
    createAdvantagesSlider();
    createPhotogallerySlider();
    initLeaflet();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
