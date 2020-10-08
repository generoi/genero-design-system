import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
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
  <style>
    .variation-1 {
      padding: 40px;
      --card-border: 1px solid black;
    }
    .variation-2 {
      padding: 40px;
      --card-background-color: transparent;
      --card-box-shadow: none;
      --card-box-shadow-hover: none;
      --card-box-shadow-active: none;
    }
    .variation-3 {
      padding: 40px;
      --card-background-color: transparent;
    }
    .variation-4 {
      padding: 40px;
      --card-border-radius: 0;
    }
  </style>
  <p>
    <gds-card class="variation-1">
      With border.
    </gds-card>
  </p>
  <p>
    <gds-card class="variation-2">
      Without background color and box shadow.
    </gds-card>
  </p>
  <p>
    <gds-card class="variation-3">
      Without background color.
    </gds-card>
  </p>
  <p>
    <gds-card class="variation-4">
      With sharp corners.
    </gds-card>
  </p>
`
