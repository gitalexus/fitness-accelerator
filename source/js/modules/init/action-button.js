function initActionButton() {
  const subscription = document.querySelector('#subscriptions');
  const heroActionButton = document.querySelector('[data-action-btn]');

  if (subscription !== null && heroActionButton !== null) {
    heroActionButton.addEventListener('click', ()=> {
      subscription.scrollIntoView({block: 'start', behavior: 'smooth'});
    });
  }
}

export {initActionButton};
