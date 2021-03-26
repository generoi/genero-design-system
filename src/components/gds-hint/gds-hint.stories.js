import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/Hint',
  component: 'gds-hint',
}

export const Examples = () => html`
  <div class="form">
    <p>
      <gds-hint>
        <gds-icon slot="icon" name="info-circle" regular accessible-label="Read more"></gds-icon>
        <gds-text slot="content" size="xs">Hello, world! I'm overflowing.</gds-text>
      </gds-hint>
    </p>
    <p style="margin-top: 100px">
      <gds-hint>
        <gds-icon slot="icon" name="info-circle" regular accessible-label="Read more"></gds-icon>
        <gds-text slot="content" size="xs">Hello, world! And good morning.</gds-text>
      </gds-hint>
    </p>
    <gds-paragraph>TODO: Dynamically position the popup box so that it doesn't overflow the viewport.</gds-paragraph>
  </div>
`
