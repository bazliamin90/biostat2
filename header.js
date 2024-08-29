const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

  <style>
    header {
      position: sticky;
      top: 0px;
      background-color: white;
	  z-index: 99;
    }

	#nav{
      border-bottom:2px dashed black;
      list-style:none;
      margin:0;
      padding:5px;
      text-align:center;
	  font-size: 12px;

    }
    #nav li{
      position:relative;
      display:inline;
    }
    #nav a{
      display:inline-block;
      padding:5px 2px;
    }
    #nav ul{
      position:absolute;
      /*top:100%; Uncommenting this makes the dropdowns work in IE7 but looks a little worse in all other browsers. Your call. */
      left:-9999px;
      margin:0;
      padding:0;
      text-align:left;
    }
    #nav ul li{
      display:block;
    }
    #nav li:hover ul{
      left:0;
    }
    #nav li:hover a{
      text-decoration:underline;
      background:white;
      color: black;
    }
    #nav li:hover ul a{
      text-decoration:none;
      background:solid;
    }
    #nav li:hover ul a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav ul a{
      white-space:normal;
      display:block;
      border-bottom:1px solid #ccc;
    }
    a{
      color:black;
      text-decoration:none;
      font-weight:bold;
    }
    a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }

	@media (max-width:400px) {
		#nav{
			list-style:none;
			margin:0;
			padding:10px;
			text-align:center;
			font-size: 12px;
			.font-family:Martian Mono;
		}
		}
		
	/* Hide the checkbox */
        .dropdown input[type="checkbox"] {
            display: none;
        }

        /* Style the dropdown container */
        .dropdown {
            position: relative;
            display: inline-block;
        }

        /* Style the dropdown button */
        .dropdown-button {
			background-color: #e4ffb2;
            color: black;
            padding: 5px 10px;
            font-size: 0.8rem;
            border: 1px solid black;
			border-radius: 4px;
            cursor: pointer;
            text-align: center;
        }

        /* Style the dropdown content */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 115px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 4px;
            overflow: hidden;
        }

        /* Style each item inside the dropdown */
        .dropdown-content ol {
            list-style: none;
            margin: 0px;
            padding: 0px;
			font-size: 0.6rem;
        }

        .dropdown-content li {
            padding: 2px 6px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content li a {
            color: black;
            text-decoration: none;
            display: block;
        }

        .dropdown-content li a:hover {
            background-color: #f1f1f1;
        }

        /* Show the dropdown content when the checkbox is checked */
        .dropdown input[type="checkbox"]:checked ~ .dropdown-content {
            display: block;
        }
		
		.yellow{
			background-color: #fff33d;
		}
		
  </style>


  <header>
    <ul id="nav">

		<li>
		<a href="index.html">Home</a>
		</li>

		<li>|</li>

		
		<div class="dropdown">
        <input type="checkbox" id="dropdown-toggle">
        <label for="dropdown-toggle" class="dropdown-button">Select page ▼</label>
        <div class="dropdown-content">
            <ol>
				<li class="yellow"><a href="index.html">&nbsp🏠︎</a></li>
				<li><a href="110.html">110</a></li>
				<li><a href="111.html">111</a></li>
				<li><a href="112.html">112</a></li>
				<li><a href="113.html">113</a></li>
				<li><a href="114.html">114</a></li>
				<li><a href="115.html">115</a></li>
				<li><a href="116.html">116</a></li>
				<li><a href="117.html">117</a></li>
				<li><a href="118.html">118</a></li>
				<li><a href="119.html">119</a></li>
            </ol>
        </div>
    </div>
	</ul>
	
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
