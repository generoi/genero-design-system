import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  title: 'Containers',
  component: 'gds-logo-grid',
}

// prettier-ignore
const item = html`<gds-logo-grid-item
  image-url="${getMockImageUrl('logo', 400, 400, true)}"
  ></gds-logo-grid-item>`

// prettier-ignore
export const LogoGrid = () => html`
  <gds-logo-grid>
    <gds-logo-grid-item
      href="https://www.genero.fi"
      image-url="https://genero.fi/app/themes/genero/dist/images/logo_2cdda69a.svg"
    ></gds-logo-grid-item>
    ${item}${item}${item}${item}${item}${item}${item}${item}${item}${item}
  </gds-logo-grid>
`
