import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/Hamburger',
}

export const Examples = () => html`
  <p>
    <gds-hamburger label="Menu" />
  </p>
  <p>
    <gds-hamburger label="Close" active />
  </p>
`
