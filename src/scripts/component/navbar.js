class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="nav-bar">
          <div class="nav-logo">
            <a href="#/home">GoHang</a>
          </div>

        <!--Hamburger Menu-->
          <button id="menu" class="nav-menu" href="#">☰</button>
          
          <ul class="nav-list">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorites</a></li>
          <li><a href="https://www.instagram.com/pukusma/" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);
