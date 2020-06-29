import { html } from 'lit-html'

export default {
  title: 'Complex Components',
  component: 'gds-navigation',
}

const getMenu = direction => html`
  <gds-menu direction="${direction}">
    <gds-menu-item slot="item" href="https://www.genero.fi">First item</gds-menu-item>
    <gds-menu-item slot="item" href="https://www.genero.fi">Second item</gds-menu-item>
    <gds-menu-item slot="item" href="https://www.genero.fi">Third item</gds-menu-item>
    <gds-menu-item slot="item" href="https://www.genero.fi">Short</gds-menu-item>
    <gds-menu-item slot="item" href="https://www.genero.fi">And with ÖÄÅ</gds-menu-item>
  </gds-menu>
`

// prettier-ignore
export const Navigation = () => html`
  <gds-navigation
    home-url="https://www.genero.fi"
    logo-url="https://genero.fi/app/themes/genero/dist/images/logo_2cdda69a.svg"
  >
    <div slot="menu">
      ${getMenu()}
    </div>
  </gds-navigation>
  <gds-paragraph>Navigation adjusts to the screen width.</gds-paragraph>
`
