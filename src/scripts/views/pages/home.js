import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/restaurantList';

const Home = {
  async render() {
    return `
        <restaurant-list> </restaurant-list>
        `;
  },

  async afterRender() {
    const homePage = await RestaurantApiSource.home();
    const restaurantsContainer = document.querySelector('#restaurantList');
    homePage.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
    const hero = document.querySelector('.hero');
    if (hero.classList.contains('skip-hero')) {
      hero.classList.remove('skip-hero');
    }
  },
};

export default Home;
