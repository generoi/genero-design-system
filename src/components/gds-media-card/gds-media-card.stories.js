import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  title: 'Complex Components',
  component: 'gds-media-card',
}

// prettier-ignore
export const MediaCard = () => html`
  <div style="margin: 40px;">
    <gds-media-card
      href="https://google.com"
      image-url="${getMockImageUrl('product', 500, 500)}"
    >
      <div slot="content">
        <gds-heading size="s">This is a headline</gds-heading>
        <gds-paragraph>
          This Media Card uses a free form content slot. Here is some description. The whole card is wrapped in link.
        </gds-paragraph>
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </div>
    </gds-media-card>
  </div>
  <div style="margin: 40px;">
    <gds-media-card
      image-url="${getMockImageUrl('product', 500, 500)}"
      superimposed-url="images/superimpose.png"
      superimposed-top="50"
      superimposed-bottom="50"
      onclick="console.log('clicked media card')"
    >
      <div slot="content">
        <gds-link href="https://google.com">
          <gds-heading size="s">This heading is a link</gds-heading>
        </gds-link>
        <gds-paragraph>
          This Media Card uses a free form content slot. Here is some description.
        </gds-paragraph>
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </div>
    </gds-media-card>
  </div>
  <div style="margin: 40px;">
    <gds-media-card
      headline="Card Headline"
      image-url="${getMockImageUrl('product', 500, 500)}"
      description="This Media Card uses a paramenters for content."
    >
      <div slot="tags">
        <gds-tag>From tags slot</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </div>
    </gds-media-card>
  </div>
`
