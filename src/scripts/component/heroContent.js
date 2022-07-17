class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('hero');
    this.innerHTML = `
        <div class="hero-inner">
            <div class="hero-title">
                <span> Discover the Best Restaurants <br>from <br>Every Neighbourhood </span>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-content', HeroContent);
