import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-body',
}

// prettier-ignore
export const Body = () => html`
  <gds-body size="l">L Body</gds-body>
  <gds-body size="m">M Body</gds-body>
  <gds-body size="s">S Body</gds-body>
`
