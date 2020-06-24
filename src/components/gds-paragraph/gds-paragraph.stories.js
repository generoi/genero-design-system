import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-paragraph',
}

// prettier-ignore
export const paragraph = () => html`
  <gds-paragraph size="l">L Paragraph</gds-paragraph>
  <gds-paragraph size="m">M Paragraph</gds-paragraph>
  <gds-paragraph size="s">S Paragraph</gds-paragraph>
`
