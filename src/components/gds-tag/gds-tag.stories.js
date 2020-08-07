import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-tag',
}

// prettier-ignore
export const Tag = () => html`
  <style>
    .override {
      --tag-color: red;
      --tag-background-color: transparent;
      --tag-border-color: red;
    }
  </style>
  <gds-tag>Label for labels and tags</gds-tag>
  <gds-tag href="https://www.genero.fi" target="_blank">Label with a link</gds-tag>
  <gds-tag class="override">Label can override colors and borders</gds-tag>
`
