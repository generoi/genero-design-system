import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/VisuallyHidden',
}

export const Examples = () => html`
  <gds-visually-hidden>
    <a href="#">Visually hidden link</a>
  </gds-visually-hidden>

  <gds-visually-hidden focusable>
    <a href="#">Visually hidden but focusable link</a>
  </gds-visually-hidden>
`
