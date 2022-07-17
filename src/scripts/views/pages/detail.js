/* eslint-disable no-alert */
import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../../component/detailRestaurant';
import {
  createRestoDetailTemplate,
  createRestoReviewTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <detail-restaurant></detail-restaurant>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#content').focus();
    });
    const detail = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestoDetailTemplate(detail);

    restaurantContainer.innerHTML += `
        <h3 class='review-title'> Reviews <hr></hr> </h3>
        <div class='restaurant-card-review'>

        </div>
        `;

    const restaurantReview = document.querySelector('.restaurant-card-review');
    detail.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestoReviewTemplate(review);
    });

    const hero = document.querySelector('.hero');
    if (!hero.classList.contains('skip-hero')) {
      hero.classList.toggle('skip-hero');
    }
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
