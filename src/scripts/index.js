import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/navbar';
import './component/heroContent';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.nav-list'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
