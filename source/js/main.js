import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// идентификатор видео на youtube
const videoId = '9TZXsZItgdw';

// цены подписок
const SUBSCRIPTIONS = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

function initVideo() {
  const videoContainer = document.querySelector('.gym__video');
  const playButton = document.querySelector('.gym__video button');
  const placeHolder = document.querySelector('.gym__video img');

  if (playButton !== null && videoContainer !== null && placeHolder !== null) {
    playButton.addEventListener('click', ()=> {
      const iframe = createIframe(videoId);
      videoContainer.appendChild(iframe);
      playButton.remove();
      placeHolder.remove();
    });
  }
}

function initActionButton() {
  const subscription = document.querySelector('#subscriptions');
  const heroActionButton = document.querySelector('.hero__action-link');

  if (subscription !== null && heroActionButton !== null) {
    heroActionButton.addEventListener('click', ()=> {
      subscription.scrollIntoView({block: 'start', behavior: 'smooth'});
    });
  }
}

function initSubscriptions() {
  const subscriptionsTabs = document.querySelectorAll('.subscriptions__tab');

  const removeActiveClass = () => {
    subscriptionsTabs.forEach((tab) => {
      tab.classList.remove('tab--active');
    });
  };

  subscriptionsTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      removeActiveClass();
      tab.classList.add('tab--active');
      setSubscriptions(index);
    });
  });
}

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  initActionButton();
  initVideo();
  initSubscriptions();

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

function setSubscriptions(index) {
  const cards = document.querySelectorAll('.subscriptions__card');
  if (cards.length >= 3) {
    for (let i = 0; i < 3; i++) {
      const price = cards[i].querySelector('.subscriptions__price');
      price.textContent = SUBSCRIPTIONS[index][i];
      price.setAttribute('data-text', SUBSCRIPTIONS[index][i]);
    }
  }
}

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

// Cоздание фрейма с видео
function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; encrypted-media; allowfullscreen');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${id}/?rel=0&showinfo=0&autoplay=1&amp;controls=0`);

  return iframe;
}
