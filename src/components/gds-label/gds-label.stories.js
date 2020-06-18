import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-label',
}

// prettier-ignore
export const Label = () => html`
  <gds-label>Label for labels and tags</gds-label>
  <gds-label color="blue">Label can override color</gds-label>
`
