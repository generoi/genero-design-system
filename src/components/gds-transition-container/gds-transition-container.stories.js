import { html } from 'lit-html'
import { getMockImageUrl } from '../../stories/utils'


export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/TransitionContainer',
  component: 'gds-transition-container',
}

export const Examples = () => html`

<div class="demo-container">
<h1>Scroll down to demo</h1>
<h1 style="transform: rotate(90deg)">></h1>
</div>
<h2> Wrapped individually with different duration props</h2>
<div class="demo-container-cards">
<gds-transition-container duration="0.5s">
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
</gds-transition-container>
<gds-transition-container duration="0.7s">
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
</gds-transition-container>
<gds-transition-container duration="0.9s">
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
</gds-transition-container>
</div>
</gds-transition-container>
<div style="height: 30vh"></div>
<gds-transition-container>
<h2> Wrapped all cards in one transition container</h2>
<div class="demo-container-cards">
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
<style>
.demo-container {
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.demo-container-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
}
</style>
`
