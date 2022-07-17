/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button,
    drawer,
    hero,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, hero, content);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, hero);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, hero, content);
    });
  },

  _toggleDrawer(event, drawer, hero) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    hero.classList.toggle('down');
  },

  _closeDrawer(event, drawer, hero) {
    event.stopPropagation();
    drawer.classList.remove('open');
    hero.classList.remove('down');
  },
};

export default DrawerInitiator;
