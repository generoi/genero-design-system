import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  title: 'Containers',
  component: 'gds-logo-grid-item',
}

// prettier-ignore
export const LogoGridItem = () => html`
  <gds-logo-grid-item
    href="https://www.genero.fi"
    image-url="${getMockImageUrl('logo', 400, 400)}"
  />
`
