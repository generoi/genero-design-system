import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/InputWrapper',
  component: 'gds-input-wrapper',
}
export const Types = () => html`
  <gds-heading>Supported</gds-heading>
  <p>
    <gds-input-wrapper>
      <select slot="input">
        <option>option 1</option>
        <option>option 2</option>
      </select>
      <gds-label slot="label">select</gds-label>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper>
      <textarea slot="input"></textarea>
      <gds-label slot="label">textarea</gds-label>
    </gds-input-wrapper>
  </p>
  <gds-heading size="xs">input type</gds-heading>
  <p>
    <gds-input-wrapper label="text">
      <input type="text" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="date">
      <input type="date" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="email">
      <input type="email" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="file">
      <input type="file" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="month">
      <input type="month" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="number">
      <input type="number" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="password">
      <input type="password" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="search">
      <input type="search" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="tel">
      <input type="tel" slot="input" />
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="week">
      <input type="week" slot="input" />
    </gds-input-wrapper>
  </p>
  <gds-heading>unsupported</gds-heading>
  <p>
    <gds-input-wrapper label="button">
      <input type="button" slot="input" value="button" />
      <small slot="hint"> use an actual button instead </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="checkbox">
      <input type="checkbox" slot="input" />
      <small slot="hint"> don't wrap it </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="color">
      <input type="color" slot="input" />
      <small slot="hint"> don't wrap it </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="image">
      <input type="image" slot="input" />
      <small slot="hint"> use an actual button instead </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="radio">
      <input type="radio" slot="input" />
      <small slot="hint"> don't wrap it </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="range">
      <input type="range" slot="input" />
      <small slot="hint"> don't wrap it </small>
    </gds-input-wrapper>
  </p>
  <p>
    <gds-input-wrapper label="submit">
      <input type="submit" slot="input" />
      <small slot="hint"> use an actual button instead </small>
    </gds-input-wrapper>
  </p>
`
Types.parameters = {
  backgrounds: {
    disable: false,
    default: 'white',
    values: [{ name: 'white', value: '#fff' }],
  },
}

export const Examples = () => html`
  <div class="form">
    <style>
      .form {
        padding: 24px;
        background: white;
      }
      .block {
        display: block;
      }
    </style>
    <p>
      <gds-input-wrapper label="This is a label">
        <input slot="input" placeholder="Some placeholder" />
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Visually hidden label" hide-label-visually>
        <input slot="input" placeholder="Can have a visually hidden label" />
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Can have a textarea">
        <textarea slot="input" placeholder="Some placeholder" rows="5"></textarea>
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Can have a select (style option outside of GDS)">
        <select slot="input">
          <option value="a1">Option 1</option>
          <option value="a2">Option 2</option>
        </select>
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="Using requires and disabled first option looks like a placholder">
        <select slot="input" required>
          <option value="" selected disabled hidden>With placeholder</option>
          <option value="a1">Option 1</option>
          <option value="a2">Option 2</option>
        </select>
      </gds-input-wrapper>
    </p>
    <p>
      <gds-input-wrapper label="This is a label with a hint">
        <gds-hint slot="hint">
          <gds-icon slot="icon" name="info-circle" light accessible-label="Read more about label"></gds-icon>
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
    <p>
      <gds-input-wrapper class="block" label="It can alse be styled to take full width">
        <input slot="input" />
      </gds-input-wrapper>
    </p>
  </div>
`
