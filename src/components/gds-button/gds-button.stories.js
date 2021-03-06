import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Atomic Elements/Button',
}

export const Examples = () => html`
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
    <gds-button right-icon-rotate="90">
      <span slot="left-icon">❮</span>
      Icons using slots
      <span slot="right-icon">❮</span>
    </gds-button>
  </p>
  <p>
    <gds-button right-icon-rotate="90">
      <span slot="left-icon"><span>❮</span></span>
      Using using slots with element
      <span slot="right-icon"><span>❮</span></span>
    </gds-button>
  </p>
  <p>
    <gds-button disabled>Disabled Button</gds-button>
  </p>
  <style>
    .inverted {
      --gds-button-color: black;
      --gds-button-background-color: white;
      --gds-button-border: 1px solid black;
    }
    .sharp {
      --gds-button-border-radius: 0;
    }
    .outline {
      --gds-button-border: 1px solid white;
      --gds-button-outline: 4px solid black;
    }
    .glow {
      --gds-button-outline: 4px solid #264534;
      --gds-button-outline-hover: 4px solid #264534;
      --gds-button-background-color: transparent;
      --gds-button-background-image: radial-gradient(#006e3b, #264534);
      --gds-button-background-image-hover: radial-gradient(#387c57, #334b3d);
    }
    .shadow {
      --gds-button-box-shadow: 8px 7px 0px 0px #fdc2c2;
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
  <p>
    <gds-button class="shadow" size="m">Shadow</gds-button>
  </p>
  <gds-paragraph>
    <a href="https://www.martinstoeckli.ch/fontmap/fontmap.html" target="_blank">Here is a list of icon like fonts</a>
  </gds-paragraph>
`
