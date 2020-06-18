import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-tag',
}

// prettier-ignore
export const Tag = () => html`
  <gds-tag>Label for labels and tags</gds-tag>
  <gds-tag href="https://www.genero.fi" target="_blank">Label with a link</gds-tag>
  <gds-tag color="red" backgroundColor="yellow">Label can override color</gds-tag>
`
