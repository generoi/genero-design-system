import { html } from 'lit-html'

import { getMockImageUrl } from '../../stories/utils'

export default {
  title: 'Complex Components/MediaCard',
  component: 'gds-media-card',
}

// prettier-ignore
export const Examples = () => html`
  <div style="margin-bottom: 40px;">
    <gds-media-card
      href="https://google.com"
      image-url="${getMockImageUrl('product', 500, 500)}"
      image-alt="Product"
      accessible-label="Read more about it"
    >
      <gds-heading size="s" slot="headline">This is a headline</gds-heading>
      <gds-paragraph size="l" slot="description">
        This Media Card uses content slots for each section. Here is some description. The whole card is wrapped in link.
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin-bottom: 40px;">
    <gds-media-card
      image-url="${getMockImageUrl('product', 500, 500)}"
      superimposed-url="images/superimpose.png"
      superimposed-top="50"
      superimposed-bottom="50"
      image-alt="Superimposed product"
      onclick="console.log('clicked media card')"
    >
      <gds-link href="https://google.com" slot="headline">
        <gds-heading size="s">This heading is a link</gds-heading>
      </gds-link>
      <gds-paragraph size="l" slot="description">
        This Media Card uses content slots for each section. Here is some description.
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin-bottom: 40px;">
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
  <div style="margin-bottom: 40px;">
    <gds-media-card
      image-url="${getMockImageUrl('nature', 500, 500)}"
      superimposed-url="images/superimpose-bottom.png"
      superimposed-top="-20"
      superimposed-bottom="0"
      superimposed-left="20"
      overlay
      overlay-effect="blur"
      style="--media-card-overlay-color: var(--color-ui-03)"
    >
      <gds-heading size="s" slot="headline">This heading is a link</gds-heading>
      <gds-paragraph size="l" lot="description">
        This Media Card uses a blurred overlay with a custom color
      </gds-paragraph>
      <gds-tag-group slot="tags">
        <gds-tag>First Tag</gds-tag>
        <gds-tag href="https://www.genero.fi">Tag with a link</gds-tag>
      </gds-tag-group>
    </gds-media-card>
  </div>
  <div style="margin-bottom: 40px;">
    <gds-media-card
      headline="Card Headline"
      image-url="${getMockImageUrl('product', 500, 500)}"
      overlay
      style="--media-card-overlay-color: var(--color-ui-04)"
      description="You can also apply only an overlay and keep the image sharp"
    />
    <div slot="content">
      <gds-paragraph size="s">There's also a freeform content slot</gds-paragraph>
      <gds-paragraph size="s">which appears after after the other slots</gds-paragraph>
    </div>
  </div>
  <div style="margin-bottom: 40px; height: 700px; border: 1px dashed black;">
    <style>
      .full-height {
        --card-height: 100%;
        --media-card-height: 100%;
        --gds-link-height: 100%
      }
    </style>
    <gds-media-card
      href="https://google.com"
      class="full-height"
      headline="Card Headline"
      image-url="${getMockImageUrl('house', 500, 500)}"
      overlay
      style="--media-card-overlay-color: var(--color-ui-04)"
      description="You can override the card-height to extend the height of its parent container."
    />
    <div slot="content">
      <gds-paragraph size="s">There's also a freeform content slot</gds-paragraph>
      <gds-paragraph size="s">which appears after after the other slots</gds-paragraph>
    </div>
  </div>
`
