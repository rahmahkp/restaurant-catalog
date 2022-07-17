/* eslint-disable no-shadow */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/likedResto';

const Like = {
  async render() {
    return `
        <liked-resto></liked-resto>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurantList');

    try {
      if (restaurant.length === 0) {
        restaurantContainer.innerHTML = `
        <div class="empty-message">
          <h4><i class="fa-regular fa-face-frown"></i> You don't have any List Favorite Restaurant <i class="fa-regular fa-face-frown"></i></h4>
        </div>
        `;
      } else if (restaurant.length >= 1) {
        restaurant.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
        });
        const hero = document.querySelector('.hero');
        if (!hero.classList.contains('skip-hero')) {
          hero.classList.toggle('skip-hero');
        }
      }
    } catch (error) {
      restaurantContainer.innerHTML = `Error: ${error}`;
    }
  },
};

export default Like;
