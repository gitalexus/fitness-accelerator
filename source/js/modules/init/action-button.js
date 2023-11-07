function initActionButton() {
  const subscription = document.querySelector('#subscriptions');
  const heroActionButton = document.querySelector('.hero__action-link');

  if (subscription !== null && heroActionButton !== null) {
    heroActionButton.addEventListener('click', ()=> {
      subscription.scrollIntoView({block: 'start', behavior: 'smooth'});
    });
  }
}

export {initActionButton};
