const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      position: sticky;
      top: 0px;
      background-color: white;
	  z-index: 99;
    }
	
	.home {
		position: fixed;
		top: 50px;
		right: -15px;
		transform: rotate(90deg);
		z-index: 9;
		font-size: 10px;
		color: grey;
		background-color: #FFCCCB;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		text-decoration: none;
		text-align: center;
		padding: 10px 5px;
	}
	
	.home:active {
		background-color: black;
		color: white;
	}
  </style>


  <header>
    <a href="index.html" class="home">T o p i c s</a>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);