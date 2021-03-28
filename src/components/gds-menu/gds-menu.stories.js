import { html } from 'lit-html'

export default {
  // NOTE: This is now classified like this since it requires the gds-menu-item children to function properly.
  title: 'Complex Components/Menu',
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
export const Examples = () => html`
  <gds-paragraph>Menu can adjust to the screen width.</gds-paragraph>
  ${getMenu()}
  <gds-paragraph>Menu be forced to horizontal.</gds-paragraph>
  ${getMenu('horizontal')}
  <gds-paragraph>Menu be forced to vertical.</gds-paragraph>
  ${getMenu('vertical')}
`

// prettier-ignore
export const Submenus = () => html`
  <gds-menu role="menubar" aria-label="Primary navigation">
    <gds-menu-item-nested slot="item" submenu-icon="❯">
      <a slot="link" href="#first">
        <gds-menu-item>First item</gds-menu-item>
      </a>
      <gds-submenu slot="submenu" aria-label="First item submenu">
        <a slot="submenu-item" href="#first-submenu">
          <gds-menu-item>First submenu item</gds-menu-item>
        </a>
        <a slot="submenu-item" href="#second-submenu">
          <gds-menu-item>Second submenu item</gds-menu-item>
        </a>
      </gds-submenu>
    </gds-menu-item-nested>
    <gds-menu-item-nested slot="item" submenu-icon="❯">
      <a slot="link" href="#second">
        <gds-menu-item>Second item</gds-menu-item>
      </a>
      <gds-submenu slot="submenu" aria-label="First item submenu">
        <a slot="submenu-item" href="#first-submenu">
          <gds-menu-item>First submenu item</gds-menu-item>
        </a>
        <a slot="submenu-item" href="#second-submenu">
          <gds-menu-item>Second submenu item</gds-menu-item>
        </a>
      </gds-submenu>
    </gds-menu-item-nested>
    <a slot="item" href="#short">
      <gds-menu-item>Short</gds-menu-item>
    </a>
    <a slot="item" href="#4">
      <gds-menu-item>And with ÖÄÅ</gds-menu-item>
    </a>
  </gds-menu>
  <gds-paragraph>Can have second level submenu.</gds-paragraph>
`

// TODO: Add css variables here
// Submenus.args = { count: 3, label: 'reflow' }
// Submenus.argTypes = {
//   count: { control: { type: 'range', min: 0, max: 20 } },
// }
