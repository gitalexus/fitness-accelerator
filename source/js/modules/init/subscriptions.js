// цены подписок
const SUBSCRIPTIONS = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

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

export {initSubscriptions};
