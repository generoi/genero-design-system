import { html } from 'lit-html'

export default {
  title: 'Atomic Elements/Text',
  component: 'gds-text',
}

// prettier-ignore
export const Examples = () => html`
  <div>
    <gds-text>This is same as gds-paragraph but without margins.</gds-text>
  </div>
  <div>
    <gds-text size="l">L Text</gds-text>
  </div>
  <div>
    <gds-text size="m">M Text</gds-text>
  </div>
  <div>
    <gds-text size="s">S Text</gds-text>
  <div>
  <div>
    <gds-text size="xs">XS Text</gds-text>
  <div>
`
