import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-label',
}

// prettier-ignore
export const Label = () => html`
  <p>
    <gds-label>Labels are used for labels and tags</gds-label>
  </p>
  <p>
    some text <gds-label color="blue">Label are inline and can use color</gds-label> some text
  </p>
`
