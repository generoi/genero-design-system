import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-paragraph',
}

// prettier-ignore
export const Paragraph = () => html`
  <gds-paragraph size="l">L Paragraph</gds-paragraph>
  <gds-paragraph>M Paragraph</gds-paragraph>
  <gds-paragraph size="s">S Paragraph</gds-paragraph>
`
