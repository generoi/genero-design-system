import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-paragraph',
}

const style = `
  padding: 20px;
  margin: 20px;
  color: white;
  text-shadow: 1px 1px 10px #000000cc;
`

const COLORS = [
  'white',
  'black',
  'ui-background-01',
  'ui-background-02',
  'ui-01',
  'ui-02',
  'ui-03',
  'ui-04',
  'ui-05',
  'ui-06',
  'ui-07',
]

// prettier-ignore
export const Colors = () => html`
  <gds-paragraph>
    <gds-card style="background-color: var(--color-primary); ${style}">
      Primary
    </gds-card>
    <gds-card style="background-color: var(--color-secondary); ${style}">
      Secondary
    </gds-card>
    <gds-card style="background-color: var(--body-background-color); ${style}">
      Body
    </gds-card>
    ${COLORS.map(color => html`
      <gds-card style="background-color: var(--color-${color}); ${style}">
        ${color}
      </gds-card>
    `)}
  </gds-paragraph>
`
