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
    .sharp {
      --tag-color: black;
      --tag-background-color: transparent;
      --tag-border: 4px solid black;
      --tag-border-radius: 0;
      --tag-padding: 2px 10px 4px 10px
    }
  </style>
  <gds-tag>Label for labels and tags</gds-tag>
  <gds-tag href="https://www.genero.fi" target="_blank">Label with a link</gds-tag>
  <gds-tag class="override">Label can override colors and borders</gds-tag>
  <gds-tag class="sharp">Sharp borders</gds-tag>
`
