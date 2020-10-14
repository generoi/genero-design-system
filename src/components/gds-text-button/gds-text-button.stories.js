import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/TextButton',
}

export const Examples = () => html`
  <p>
    <gds-text-button size="s" left-icon="➞">Text Button S</gds-text-button>
  </p>
  <p>
    <gds-text-button size="m">Text Button M</gds-text-button>
  </p>
  <p>
    <gds-text-button left-icon="❮">Icon as character</gds-text-button>
  </p>
  <p>
    <gds-text-button right-icon="❮" right-icon-rotate="90">Rotated icon</gds-text-button>
  </p>
  <p>
    <gds-text-button left-icon="❮" right-icon="❯">Both icons</gds-text-button>
  </p>
  <p>
    <gds-text-button right-icon-rotate="90">
      <span slot="left-icon">❮</span>
      Using slots
      <span slot="right-icon">❯</span>
    </gds-text-button>
  </p>
  <p>
    <gds-text-button disabled>Disabled Text Button</gds-text-button>
  </p>
  <gds-paragraph>
    <a href="https://www.martinstoeckli.ch/fontmap/fontmap.html" target="_blank">Here is a list of icon like fonts</a>
  </gds-paragraph>
`
