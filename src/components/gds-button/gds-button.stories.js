import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements',
}

export const Button = () => html`
  <p>
    <gds-button size="s">Basic Button S</gds-button>
  </p>
  <p>
    <gds-button>Basic Default Button M</gds-button>
  </p>
  <p>
    <gds-button size="s" text>Text Button S</gds-button>
  </p>
  <p>
    <gds-button size="m" text>Text Button M</gds-button>
  </p>
  <p>
    <gds-button disabled>Disabled Button</gds-button>
  </p>
`
