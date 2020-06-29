import { html } from 'lit-html'

export default {
  title: 'Containers',
  component: 'gds-menu',
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
export const Menu = () => html`
  <gds-paragraph>Menu can adjust to the screen width.</gds-paragraph>
  ${getMenu()}
  <gds-paragraph>Menu be forced to horizontal.</gds-paragraph>
  ${getMenu('horizontal')}
  <gds-paragraph>Menu be forced to vertical.</gds-paragraph>
  ${getMenu('vertical')}
`
