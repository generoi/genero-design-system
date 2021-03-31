import { html } from 'lit-html'

export default {
  title: 'Complex Components/Navigation',
  component: 'gds-navigation',
}

// prettier-ignore
export const Examples = () => html`
  <gds-navigation
    accessible-navigation-label="Primary navigation"
    accessible-hamburger-label="Menu"
  >
    <a slot="logo" href="/" aria-label="Genero frontpage" rel="home">
      <img src="images/genero-logo.png" alt="" />
    </a>
    <div slot="menu">
      <gds-menu key="123">
        <gds-menu-item-nested slot="item" submenu-icon="❯">
          <a slot="link" href="#first">
            <gds-menu-item>Services</gds-menu-item>
          </a>
          <gds-submenu slot="submenu">
            <a slot="submenu-item" href="#first-submenu">
              <gds-menu-item>Growth</gds-menu-item>
            </a>
            <a slot="submenu-item" href="#second-submenu">
              <gds-menu-item>Design</gds-menu-item>
            </a>
            <a slot="submenu-item" href="#second-submenu">
              <gds-menu-item>Tech</gds-menu-item>
            </a>
          </gds-submenu>
        </gds-menu-item-nested>
        <a slot="item" href="#2">
          <gds-menu-item active>Cases</gds-menu-item>
        </a>
        <a slot="item" href="#short">
          <gds-menu-item>Crew</gds-menu-item>
        </a>
        <a slot="item" href="#4">
          <gds-menu-item>Contact</gds-menu-item>
        </a>
      </gds-menu>
    </div>
    <div slot="search">
      <gds-search-form collapsed action="https://www.google.com" query="q"></gds-search-form>
    </div>
    <div slot="desktop-extensions">
      <nav aria-label="Language menu">
        <gds-menu key="321">
          <a slot="item" href="#fi" aria-label=Finnish">
            <gds-menu-item>FI</gds-menu-item>
          </a>
          <a slot="item" href="#se" aria-label="Swedish">
            <gds-menu-item>SE</gds-menu-item>
          </a>
          <a slot="item" href="#en" aria-label="English">
            <gds-menu-item>EN</gds-menu-item>
          </a>
        </gds-menu>
      </div>
    </div>
    <div slot="mobile-extensions">
      <nav aria-label="Language menu">
        <gds-menu key="321">
          <a slot="item" href="#fi">
            <gds-menu-item>Finnish</gds-menu-item>
          </a>
          <a slot="item" href="#se">
            <gds-menu-item>Sverge</gds-menu-item>
          </a>
          <a slot="item" href="#en">
            <gds-menu-item>English</gds-menu-item>
          </a>
        </gds-menu>
      </nav>
    </div>
  </gds-navigation>

  <gds-paragraph>Navigation adjusts to the screen width.</gds-paragraph>

  <gds-navigation accessible-navigation-label="Primary navigation 2" class="responsive">
    <a slot="logo" href="/" aria-label="Genero frontpage">
      <img src="images/genero-logo.png" alt="" />
    </a>
    <div slot="menu">
      <gds-menu key="123">
        <a slot="item" href="#first">
          <gds-menu-item>First item</gds-menu-item>
        </a>
        <a slot="item" href="#2">
          <gds-menu-item active>Second item</gds-menu-item>
        </a>
        <a slot="item" href="#short">
          <gds-menu-item>Short</gds-menu-item>
        </a>
        <a slot="item" href="#4">
          <gds-menu-item>And with ÖÄÅ</gds-menu-item>
        </a>
      </gds-menu>
    </div>
    <style>
      gds-icon {
        --icon-color: #4444cc;
        --icon-font-size: 30px;
      }
    </style>
    <gds-icon name="hamburger" slot="menu-icon"></gds-icon>
    <gds-icon name="times" light slot="close-menu-icon"></gds-icon>

    <div slot="search">
      <gds-search-form action="https://www.google.com" query="q"></gds-search-form>
    </div>
  </gds-navigation>
  <script>
    let mediaQuery = window.matchMedia('(max-width: 600px)')
    let setCollapsed = value => document.querySelector('.responsive gds-search-form').collapsed = value
    mediaQuery.addEventListener('change', (event) => setCollapsed(event.matches))
    setCollapsed(mediaQuery.matches)
  </script>

  <gds-paragraph>Mobile navigation can have custom hamburger icon.</gds-paragraph>

  <style>
    .custom-menu-background .open {
      --navigation-color: var(--color-white);
      --icon-color: var(--navigation-color);
      --icon-color-hover: var(--navigation-color);
      --navigation-content-background: repeating-linear-gradient(to right, #166e3b, #166e3b 10px, #146635 10px, #146635 20px);
      --gds-menu-item-background-color-active: transparent;
      --gds-menu-item-underline-active: underline solid currentColor 3px;
      --label-text-transform: none;
    }
    .custom-menu-background gds-icon {
      --icon-color: var(--navigation-color);
    }
  </style>
  <gds-navigation class="custom-menu-background" accessible-navigation-label="Primary navigation 3">
    <a slot="logo" href="/" aria-label="Genero">
      <img src="images/genero-logo.png" alt="" />
    </a>
    <div slot="menu">
      <gds-menu key="123">
        <a slot="item" href="#first">
          <gds-menu-item>First item</gds-menu-item>
        </a>
        <a slot="item" href="#2">
          <gds-menu-item active>Second item</gds-menu-item>
        </a>
        <a slot="item" href="#short">
          <gds-menu-item>Short</gds-menu-item>
        </a>
        <a slot="item" href="#4">
          <gds-menu-item>And with ÖÄÅ</gds-menu-item>
        </a>
      </gds-menu>
    </div>
    <gds-icon name="hamburger" slot="menu-icon"></gds-icon>
    <gds-icon name="times" light slot="close-menu-icon"></gds-icon>
  </gds-navigation>

  <gds-paragraph>Mobile navigation can have custom styles for opened mobile menu.</gds-paragraph>
`
