import { html } from 'lit-html'

export default {
  title: 'Complex Components/Navigation',
  component: 'gds-navigation',
}

// prettier-ignore
export const Examples = () => html`
  <gds-navigation>
    <a slot="logo" href="/">
      <img src="images/genero-logo.png" />
    </a>
    <div slot="menu">
      <gds-menu key="123" role="menubar" aria-label="Primary navigation">
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
    <div slot="desktop-extensions">
      <gds-menu key="321">
        <a slot="item" href="#fi">
          <gds-menu-item>FI</gds-menu-item>
        </a>
        <a slot="item" href="#se">
          <gds-menu-item>SE</gds-menu-item>
        </a>
        <a slot="item" href="#en">
          <gds-menu-item>EN</gds-menu-item>
        </a>
      </gds-menu>
    </div>
    <div slot="mobile-extensions">
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
    </div>
  </gds-navigation>

  <gds-paragraph>Navigation adjusts to the screen width.</gds-paragraph>

  <gds-navigation>
    <a slot="logo" href="/">
      <img src="images/genero-logo.png" />
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
        --icon-font-size: 44px;
      }
    </style>
    <gds-icon name="hamburger" slot="menu-icon"></gds-icon>
    <gds-icon name="times" light slot="close-menu-icon"></gds-icon>
  </gds-navigation>

  <gds-paragraph>Mobile navigation can have custom hamburger icon.</gds-paragraph>

  <style>
    .custom-menu-background .open {
      --navigation-color: var(--color-white);
      --icon-color: var(--navigation-color);
      --icon-color-hover: var(--navigation-color);
      --navigation-content-background: repeating-linear-gradient(to right, #166e3b, #166e3b 10px, #146635 10px, #146635 20px);
      --menu-item-background-color-active: transparent;
      --menu-item-underline-display: block;
      --label-text-transform: none;
    }
    .custom-menu-background gds-icon {
      --icon-color: var(--navigation-color);
    }
  </style>
  <gds-navigation class="custom-menu-background">
    <a slot="logo" href="/">
      <img src="images/genero-logo.png" />
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
