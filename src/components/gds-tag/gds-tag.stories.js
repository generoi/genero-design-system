import { html } from 'lit-html'

export default {
  title: 'Complex Components/Tag',
  component: 'gds-tag',
}

// prettier-ignore
export const Examples = () => html`
  <style>
    .override {
      --gds-tag-color: darkred;
      --gds-tag-background-color: transparent;
      --gds-tag-border-color: currentColor;
    }
    .sharp {
      --gds-tag-color: black;
      --gds-tag-background-color: transparent;
      --gds-tag-border: 4px solid black;
      --gds-tag-border-radius: 0;
      --gds-tag-padding: 2px 10px 4px 10px
    }
  </style>
  <gds-tag>Label for labels and tags</gds-tag>
  <gds-tag href="https://www.genero.fi" target="_blank">Label with a link</gds-tag>
  <gds-tag class="override">Label can override colors and borders</gds-tag>
  <gds-tag class="sharp">Sharp borders</gds-tag>
`
