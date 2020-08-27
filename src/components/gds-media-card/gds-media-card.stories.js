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
      <gds-heading size="s" slot="headline">This is a headline</gds-heading>
      <gds-paragraph slot="description">
        This Media Card uses content slots for each section. Here is some description. The whole card is wrapped in link.
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
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
      <gds-link href="https://google.com" slot="headline">
        <gds-heading size="s">This heading is a link</gds-heading>
      </gds-link>
      <gds-paragraph slot="description">
        This Media Card uses content slots for each section. Here is some description.
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin: 40px;">
    <gds-media-card
      headline="Blurred image"
      image-url="${getMockImageUrl('nature', 500, 500)}"
      overlay-effect="blur"
    >
      <gds-tag-group slot="tags">
        <gds-tag>From tags slot</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin: 40px;">
    <gds-media-card
      image-url="${getMockImageUrl('nature', 500, 500)}"
      superimposed-url="images/superimpose.png"
      superimposed-top="50"
      superimposed-bottom="50"
      overlay
      overlay-effect="blur"
      style="--media-card-overlay-color: var(--color-ui-03)"
    >
      <gds-heading size="s" slot="headline">This heading is a link</gds-heading>
      <gds-paragraph slot="description">
        This Media Card uses a blurred overlay with a custom color
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin: 40px;">
    <gds-media-card
      headline="Card Headline"
      image-url="${getMockImageUrl('product', 500, 500)}"
      overlay
      style="--media-card-overlay-color: var(--color-ui-04)"
      description="You can also apply only an overlay and keep the image sharp"
    />
  </div>
`
