import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements',
}

// prettier-ignore
export const Link = () => html`
  <p>
    <gds-link href="https://www.genero.fi" target="_blank">Basic Link</gds-link>
  </p>
  <p>
    <gds-link>Link without href</gds-link>
  </p>
`
