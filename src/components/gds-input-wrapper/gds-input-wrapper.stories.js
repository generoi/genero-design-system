import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/InputWrapper',
  component: 'gds-input-wrapper',
}

export const Examples = () => html`
  <div class="form">
    <style>
      .form {
        padding: 24px;
        background: white;
      }
    </style>
    <p>
      <gds-input-wrapper label="This is a label">
        <input slot="input" placeholder="Some placeholder" />
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Can have a textarea">
        <textarea slot="input" placeholder="Some placeholder" rows="5"></textarea>
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="This is a label with a hint">
        <gds-hint slot="hint">
          <gds-icon slot="icon" name="info-circle" light></gds-icon>
          <gds-text slot="content" size="xs">I am a hint box with some text.</gds-text>
        </gds-hint>
        <input slot="input" value="Some value" />
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Input wrappers display">
        <input slot="input" />
      </gds-input-wrapper>
      <gds-input-wrapper label="As inline-blocks">
        <input slot="input" />
      </gds-input-wrapper>
    </p>
  </div>
`
