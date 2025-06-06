const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	.scroll-box {
        width: 80%; /* Adjust the width as needed */
        height: 200px; /* Fixed height to limit the visible area */
        border: 3px solid black;
        padding: 10px;
        background-color: #f9f9f9;
        overflow-y: scroll;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s ease; /* Smooth transition for visibility */
        position: absolute; /* Overlay positioning */
        top: 45vh; /* Center vertically */
        left: 50%; /* Center horizontally */
        transform: translate(-50%, -50%); /* Adjust positioning to center */
        display: none; /* Initially hidden */
        z-index: 1000; /* Ensure it appears above other content */
    }

    .scroll-box.visible {
        display: block; /* Show the overlay when the class is toggled */
    }
	
	.scroll-box .close-message {
        font-family: monospace;
		font-size: 8px;
        color: grey;
        margin-bottom: 10px;
        text-align: center;
        font-style: italic;
    }

    .scroll-box .search-box {
        width: 90%;
        padding: 5px;
        margin-bottom: 10px;
        font-family: monospace;
		    font-size: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
.scroll-box ol {
    font-family: monospace;
    margin: 0;
    padding: 0 0 0 2.2em; /* ← Add left padding */
    list-style-position: outside; /* ← Change to outside */
    color: red;
}

	.scroll-box ol a{
		font-family: monospace;
    font-size: 12px;
		text-decoration: underline grey dotted;
		text-underline-offset: 5px;
		color: black;
	}

.scroll-box li {
    padding: 5px 0;
}

    .list-button {
        font-family: monospace;
        font-size: 12px;
        padding: 5px 10px;
        margin: 10px auto;
        color: black;
        background-color: #fff;
        border: none;
        border-right: 1px solid grey;
        border-bottom: 1px solid grey;
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        transition: background-color 0.1s ease;
    }

    .list-button:active {
        color: white;
        background-color: grey;
    }

    /* Overlay styles */
    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 999; /* Ensure it appears below the scroll box */
    }

    #overlay.visible {
        display: block;
    }

    p {
        font-size: 12px;
    }
  </style>

  <button class="list-button" aria-label="Toggle List">Page</button>
  <div id="overlay"></div>
  <div class="scroll-box" id="scroll-box">
      <div class="close-message">Click outside this box to close it</div>
      <input
        type="text"
        class="search-box"
        id="search-box"
        placeholder="Search..."
        aria-label="Search list items"
      />
    <ol id="list">
          <li><a href="index.html">Homepage</a></li>
          <li><a href="0003_effectsize.html">Effect size</a></li>
          <li><a href="0001_regression.html">Linear & logistic regression</a></li>
          <hr>
          <p>Epidemiology</p>
          <li><a href="0004_tailtest.html">One/two-tailed test</a></li>
          <li><a href="0002_standardization.html">Standardization</a></li>
    </ol>
  </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

    const button = shadowRoot.querySelector('.list-button');
    const scrollBox = shadowRoot.querySelector('.scroll-box');
    const overlay = shadowRoot.querySelector('#overlay');
    const searchBox = shadowRoot.querySelector('#search-box');
    const list = shadowRoot.querySelector('#list');

    // Toggle scroll box visibility
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent propagation
      toggleScrollBox(scrollBox, overlay);
    });

    // Prevent clicks inside the scroll box from closing it
    scrollBox.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    // Close scroll box if clicked outside
    document.addEventListener('click', function (event) {
      if (
        scrollBox.classList.contains('visible') &&
        !scrollBox.contains(event.target) &&
        !event.target.matches('.list-button')
      ) {
        hideScrollBox(scrollBox, overlay);
      }
    });

    // Add search functionality
    searchBox.addEventListener('input', function () {
      const filter = searchBox.value.toLowerCase();
      const items = list.querySelectorAll('li');
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }
}

// Toggle function
function toggleScrollBox(scrollBox, overlay) {
  if (scrollBox.classList.contains('visible')) {
    hideScrollBox(scrollBox, overlay);
  } else {
    showScrollBox(scrollBox, overlay);
  }
}

// Show scroll box
function showScrollBox(scrollBox, overlay) {
  scrollBox.classList.add('visible');
  overlay.classList.add('visible');
}

// Hide scroll box
function hideScrollBox(scrollBox, overlay) {
  scrollBox.classList.remove('visible');
  overlay.classList.remove('visible');
}

customElements.define('header-component', Header);
