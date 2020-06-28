import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements',
}

export const Button = () => html`
  <p>
    <gds-button size="s">Basic Button S</gds-button>
  </p>
  <p>
    <gds-button>Basic Default Button M</gds-button>
  </p>
  <p>
    <gds-button left-icon="❮">Icon as character</gds-button>
  </p>
  <p>
    <gds-button right-icon="❮" right-icon-rotate="90">Rotated icon</gds-button>
  </p>
  <p>
    <gds-button left-icon="❮" right-icon="❯">Both icons</gds-button>
  </p>
  <p>
    <gds-button size="s" text left-icon="➞">Text Button S</gds-button>
  </p>
  <p>
    <gds-button size="m" text>Text Button M</gds-button>
  </p>
  <p>
    <gds-button disabled>Disabled Button</gds-button>
  </p>
  <gds-paragraph>
    <a href="https://www.martinstoeckli.ch/fontmap/fontmap.html" target="_blank">List of icon like fonts</a>
  </gds-paragraph>
`
