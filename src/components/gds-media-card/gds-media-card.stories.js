import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  title: 'Complex Components',
  component: 'gds-media-card',
}

// prettier-ignore
export const MediaCard = () => html`
  <gds-media-card
    headline="Card Headline"
    image-url="${getMockImageUrl('product', 500, 500)}"
  >
    <gds-tag>First Tag</gds-tag>
    <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
  </gds-media-card>
`
