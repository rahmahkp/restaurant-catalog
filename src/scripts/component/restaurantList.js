class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('content');
    this.innerHTML = `
        <article class="article">
          <div class="article-title">
            <h1>Explore Restaurants</h1>
          </div>
          <div id="restaurantList" class="restaurantList"></div>
        </article>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);
