import {isDesktop} from '../../utils/breakpoints-matches';

function initJuryCards() {
  const cards = document.querySelectorAll('[data-juryItem]');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (!isDesktop.matches) {
        card.classList.toggle('is-show');
      }
    });
    card.addEventListener('pointerenter', () => {
      if (isDesktop.matches) {
        card.classList.add('is-show');
      }
    });
    card.addEventListener('focusin', () => {
      card.classList.add('is-show');
    });
    card.addEventListener('pointerleave', () => {
      if (isDesktop.matches && card !== document.activeElement) {
        card.classList.remove('is-show');
      }
    });
    card.addEventListener('focusout', () => {
      card.classList.remove('is-show');
    });
  });
}

export {initJuryCards};
