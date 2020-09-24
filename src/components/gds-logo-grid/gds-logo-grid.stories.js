import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  // NOTE: This is now classified like this since it requires the gds-logo-grid-item children to function properly.
  title: 'Complex Components',
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
      image-url="images/genero-logo.svg"
    ></gds-logo-grid-item>
    ${item}${item}${item}${item}${item}${item}${item}${item}${item}${item}
  </gds-logo-grid>
`
