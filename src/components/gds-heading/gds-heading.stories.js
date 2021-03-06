import { html } from 'lit-html'

export default {
  title: 'Atomic Elements/Heading',
  component: 'gds-heading',
}

// prettier-ignore
export const Examples = () => html`
  <gds-heading size="xxl">XXL Heading</gds-heading>
  <gds-heading size="xl">XL Heading</gds-heading>
  <gds-heading size="l">L Heading</gds-heading>
  <gds-heading size="m">M Heading</gds-heading>
  <gds-heading size="s">S Heading</gds-heading>
  <gds-heading size="xs">XS Heading</gds-heading>
  <gds-heading size="l" as="h3">L Heading rendered as h3</gds-heading>
`
