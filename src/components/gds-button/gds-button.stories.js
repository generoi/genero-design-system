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
    <gds-button right-icon-rotate="90">
      <span slot="left-icon">❮</span>
      Using slots
      <span slot="right-icon">❮</span>
    </gds-button>
  </p>
  <p>
    <gds-button disabled>Disabled Button</gds-button>
  </p>
  <style>
    .inverted {
      --button-color: black;
      --button-background-color: white;
      --button-border: 1px solid black;
    }
    .sharp {
      --button-border-radius: 0;
    }
    .outline {
      --button-border: 1px solid white;
      --button-outline: 4px solid black;
    }
    .glow {
      --button-outline: 4px solid #264534;
      --button-outline-hover: 4px solid #264534;
      --button-background-color: transparent;
      --button-background-image: radial-gradient(#006e3b, #264534);
      --button-background-image-hover: radial-gradient(#387c57, #334b3d);
    }
  </style>
  <p>
    <gds-button class="inverted sharp" size="m">Sharp corners + border</gds-button>
  </p>
  <p>
    <gds-button class="sharp outline" size="m">Outline + border</gds-button>
  </p>
  <p>
    <gds-button class="sharp outline glow" size="m">Inner glow</gds-button>
  </p>
  <gds-paragraph>
    <a href="https://www.martinstoeckli.ch/fontmap/fontmap.html" target="_blank">Here is a list of icon like fonts</a>
  </gds-paragraph>
`
