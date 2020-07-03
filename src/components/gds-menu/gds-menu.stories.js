import { html } from 'lit-html'

export default {
  title: 'Containers',
  component: 'gds-menu',
}

const getMenu = direction => html`
  <gds-menu direction="${direction}">
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
