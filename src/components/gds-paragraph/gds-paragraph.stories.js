import { html } from 'lit-html'

export default {
  title: 'Atomic Elements/Paragraph',
  component: 'gds-paragraph',
}

// prettier-ignore
export const Examples = () => html`
  <gds-paragraph size="l">L Paragraph</gds-paragraph>
  <gds-paragraph>M Paragraph</gds-paragraph>
  <gds-paragraph size="s">S Paragraph</gds-paragraph>
  <gds-paragraph size="xs">XS Paragraph</gds-paragraph>
`
