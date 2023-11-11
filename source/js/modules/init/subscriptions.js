// цены подписок
const SUBSCRIPTIONS = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

function initSubscriptions() {
  const subscriptionsTabs = document.querySelectorAll('[data-tab]');

  const removeActiveClass = () => {
    subscriptionsTabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
  };

  subscriptionsTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      removeActiveClass();
      tab.classList.add('is-active');
      setSubscriptions(index);
    });
  });
}

function setSubscriptions(index) {
  const cards = document.querySelectorAll('[data-subscription-card]');
  if (cards.length >= 3) {
    for (let i = 0; i < 3; i++) {
      const price = cards[i].querySelector('[data-subscription-price]');
      price.textContent = SUBSCRIPTIONS[index][i];
      price.setAttribute('data-text', SUBSCRIPTIONS[index][i]);
    }
  }
}

export {initSubscriptions};
