import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements',
}

export const Button = () => html`
  <gds-button>Basic Button</gds-button>
  <gds-button disabled>Disabled Button</gds-button>
`
