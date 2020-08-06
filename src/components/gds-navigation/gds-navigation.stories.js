import { html } from 'lit-html'

export default {
  title: 'Complex Components',
  component: 'gds-navigation',
}

// prettier-ignore
export const Navigation = () => html`
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
`
