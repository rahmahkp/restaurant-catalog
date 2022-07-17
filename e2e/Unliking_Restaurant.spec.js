const assert = require('assert');

/* eslint-disable no-undef */
Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-card');
  I.seeElement('.restaurant-card');

  const firstLikedRestaurant = locate('.restaurant-card-content a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

  I.wait(1);
  I.click(firstLikedRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-card-content a');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantName);

  I.click(firstLikedRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee(firstLikedRestaurant);
  I.seeElement('.article-favorite');
  I.see('You don\'t have any List Favorite Restaurant', '.empty-message h4');
});
