import { html } from 'lit-html'

export default {
  title: 'Containers',
  component: 'gds-card',
}

// prettier-ignore
export const Card = () => html`
  <p>
    <gds-card>
      A card that renders content in a container that has * white background and border shadows. Comes without
      padding by default.
    </gds-card>
  </p>
  <p>
    <gds-card style="padding: 40px;">
      With padding
    </gds-card>
  </p>
`
