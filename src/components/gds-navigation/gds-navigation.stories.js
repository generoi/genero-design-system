import { html } from 'lit-html'

export default {
  title: 'Complex Components',
  component: 'gds-navigation',
}

const getMenu = direction => html`
  <gds-menu direction="${direction}">
    <gds-menu-item slot="item" href="#first">First item</gds-menu-item>
    <gds-menu-item slot="item" href="#second">Second item</gds-menu-item>
    <gds-menu-item slot="item" href="#short">Short</gds-menu-item>
    <gds-menu-item slot="item" href="#4">And with ÖÄÅ</gds-menu-item>
  </gds-menu>
`
const getExtensions = direction => html`
  <gds-menu direction="${direction}">
    <gds-menu-item slot="item" href="#fi">FI</gds-menu-item>
    <gds-menu-item slot="item" href="#se">SE</gds-menu-item>
    <gds-menu-item slot="item" href="#en">EN</gds-menu-item>
  </gds-menu>
`

// prettier-ignore
export const Navigation = () => html`
  <gds-navigation
    home-url="/"
    logo-url="https://genero.fi/app/themes/genero/dist/images/logo_2cdda69a.svg"
  >
    <div slot="menu">
      ${getMenu()}
    </div>
    <div slot="extensions">
      ${getExtensions()}
    </div>
  </gds-navigation>
  <gds-paragraph>Navigation adjusts to the screen width.</gds-paragraph>
`
