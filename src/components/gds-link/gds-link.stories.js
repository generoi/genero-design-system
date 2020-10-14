import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/Link',
}

// prettier-ignore
export const Examples = () => html`
  <p>
    <gds-link href="https://www.genero.fi" target="_blank">Basic Link</gds-link>
  </p>
  <p>
    <gds-link>Link without href</gds-link>
  </p>
  <p>
    <gds-link href="https://www.genero.fi" rel="nofollow">Basic Link with nofollow</gds-link>
  </p>
`
