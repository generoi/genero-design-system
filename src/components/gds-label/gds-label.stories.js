import { html } from 'lit-html'

export default {
  title: 'Atomic Elements/Label',
  component: 'gds-label',
}

// prettier-ignore
export const Examples = () => html`
  <p>
    <gds-label size="l">L Label</gds-label>
  </p>
  <p>
    <gds-label>M Label</gds-label>
  </p>
  <p>
    <gds-label size="s">S Label</gds-label>
  </p>
  <p>
    some text <gds-label color="blue">Label are inline and can use color</gds-label> some text
  </p>
`
