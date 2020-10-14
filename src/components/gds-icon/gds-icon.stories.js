import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/Icon',
}

export const Examples = () => html`
  <div>
    <style>
      gds-icon {
        --icon-font-size: 30px;
      }
    </style>
    <gds-heading>These icons use FontAwesome</gds-heading>

    <gds-paragraph>Default</gds-paragraph>
    <gds-icon name="books"></gds-icon>

    <gds-paragraph>Regular</gds-paragraph>
    <gds-icon regular name="books"></gds-icon>

    <gds-paragraph>Solid</gds-paragraph>
    <gds-icon solid name="books"></gds-icon>

    <gds-paragraph>Light</gds-paragraph>
    <gds-icon light name="books"></gds-icon>

    <gds-paragraph>Duotone</gds-paragraph>
    <gds-icon duotone name="books"></gds-icon>

    <gds-paragraph>Duotone</gds-paragraph>
    <style>
      .red {
        --icon-color: red;
      }
    </style>
    <gds-icon duotone name="books" class="red"></gds-icon>

    <gds-paragraph>Colors (with hover) and sizes</gds-paragraph>
    <style>
      .colors gds-icon {
        --icon-color: #4444cc;
        --icon-color-hover: #000077;
        --icon-font-size: 50px;
      }
    </style>
    <div class="colors">
      <gds-icon duotone name="books"></gds-icon>
    </div>
  </div>
`
