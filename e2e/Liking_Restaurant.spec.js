const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.article-favorite');
  I.see('You don\'t have any List Favorite Restaurant', '.empty-message h4');
});

Scenario('liking restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-card');
  I.seeElement('.restaurant-card');

  const firstRestaurant = locate('.restaurant-card-content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.wait(1);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-card-content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);
});
