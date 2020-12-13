// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import rules from './modules/rules.js';
import FullPageScroll from './modules/full-page-scroll';
import {log} from 'three';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  setTimeout(() => {
    document.body.classList.add(`pageLoaded`);

    const gameButtonsWrapper = document.querySelector(`.game__buttons`);
    const gameButtons = gameButtonsWrapper.querySelectorAll(`.game__button`);
    const results = document.querySelectorAll(`.screen--result`);

    gameButtons.forEach((btn, index) => {
      btn.addEventListener(`click`, () => {
        setTimeout(() => {
          results[index].querySelector(`#showResult${index + 1}`).beginElement();
        }, 300);
      });
    });

    gameButtonsWrapper.style.display = `block`;
  }, 100);
});
