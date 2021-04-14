import { html } from 'lit-html'

export default {
  // NOTE: This is now classified like this since it requires the gds-tag children to function properly.
  title: 'Complex Components/TagGroup',
  component: 'gds-tag-group',
}

// prettier-ignore
const item = () => html`<gds-tag>${Math.round(Math.random()) ? 'Slightly longer label' : 'Tag' }</gds-tag>`

// prettier-ignore
export const Examples = () => html`
  <gds-tag-group style="max-width: 500px;">
    ${Array(20).fill().map(item)}
  </gds-tag-group>

  <br />

  <div style="width: 300px; background-color: var(--gds-color-ui-01); text-align: center; padding: var(--gds-spacing-s);">
    <gds-tag-group>
      <gds-tag>Label</gds-tag>
      <gds-tag>Label</gds-tag>
      <gds-tag>Label</gds-tag>
      <gds-tag>Label</gds-tag>
    </gds-tag-group>
  </div>
`
