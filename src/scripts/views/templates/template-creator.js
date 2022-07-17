/* eslint-disable eol-last */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
<div class="restaurant-card">
  <div class="restaurant-card-header">
    <img class="lazyload restaurant-card-img" alt="${restaurant.name}"
    src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    <div class="restaurant-card-rating">
      <p><i class="fa-solid fa-star restaurant-card-rating-icon"></i><span class="restaurant-card-rating-score">${restaurant.rating}</span></p>
    </div>
  </div>
  <div class="restaurant-card-content">
    <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
  </div>
</div>
`;

const createRestoDetailTemplate = (restaurant) => `
<div class='restaurant-card-detail'>
  <h1 class="restaurant-title">${restaurant.name}</h1>
  <img class="lazyload restaurant-img-detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-information">
    <h2>Information</h2>
    <hr>
    <p>${restaurant.city}</p>
    <div class="address">
      <p><i class="fa-solid fa-location-dot restaurant-card-city-icon"></i>${restaurant.address}</p>
    </div>
    <p>Rating : ${restaurant.rating}</p>
  </div>
</div>

<div class="restaurant-menu">
  <div class="foods-menu">
    <h3>Foods Menu</h3>
    <hr>
    <span id="food">
      <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    </span>
  </div>
  <br>
  <div class "drinks-menu>
    <h3>Drinks Menu</h3>
    <hr>
    <span id="drink">
      <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
    </span>
  </div>
</div>

<div class="restaurant-overview">
  <h2>Overviews</h2>
  <hr>
  <p>${restaurant.description}</p>
</div>
`;

const createRestoReviewTemplate = (reviews) => `
<div class="review">
  <p class="name-review"> ${reviews.name} | ${reviews.date}</p>
  <br></br>
  <p> ${reviews.review}</p>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this Restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this Restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};