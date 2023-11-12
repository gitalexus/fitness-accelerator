import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initJuryCards} from './modules/init/jury-cards';
import {initSubscriptions} from './modules/init/subscriptions';
import {initActionButton} from './modules/init/action-button';
import {initVideo} from './modules/init/video';
import {initSliders} from './modules/init/swipers';

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Init
  // ---------------------------------

  initVideo();
  initActionButton();
  initSubscriptions();
  initJuryCards();
  initSliders();

  // Utils
  // ---------------------------------

  iosVhFix();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
