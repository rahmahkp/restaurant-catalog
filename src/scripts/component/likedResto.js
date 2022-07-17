class LikedResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="article-favorite">
          <div class="article-title">
            <h1>Your Favorited Restaurants</h1>
          </div>
          <div id="restaurantList" class="restaurantList"></div>
        </article>
        `;
  }
}

customElements.define('liked-resto', LikedResto);
