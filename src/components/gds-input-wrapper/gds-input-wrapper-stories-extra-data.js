import { html } from 'lit-html'
// Adding all css variables related to input here would keep the main stories file a little cleaner
// prettier-ignore
export const StyleTag = (args) => html`
    <style>
        :root {
            --gds-input-min-height:${args['--gds-input-min-height']};
            --gds-input-font-family:${args['--gds-input-font-family']};
            --gds-input-font-weight:${args['--gds-input-font-weight']};
            --gds-input-border:${args['--gds-input-border']};
            --gds-input-padding::${args['--gds-input-padding:']};
            --gds-input-border-radius:${args['--gds-input-border-radius']};
            --gds-input-color:${args['--gds-input-color']};
            --gds-input-background:${args['--gds-input-background']};
            --gds-input-font-size:${args['--gds-input-font-size']};
            --gds-select-input-padding-right:${args['--gds-select-input-padding-right']};
            --gds-select-arrow-padding-right:${args['--gds-select-arrow-padding-right']};
            --gds-select-arrow-image:${args['--gds-select-arrow-image']};
            --gds-select-arrow-size:${args['--gds-select-arrow-size']};
            --gds-select-arrow-position:${args['--gds-select-arrow-position']};
            --gds-textarea-input-resize:${args['--gds-textarea-input-resize']};
            --gds-input-placeholder-color:${args['--gds-input-placeholder-color']};
            --gds-input-border-focus:${args['--gds-input-border-focus']};
        }
    </style>
`;

export const CssControls = {
  '--gds-input-min-height': {
    control: 'text', // control: 'text' is shorthand for control: { type: 'text' }
  },
  '--gds-input-font-family': {
    control: 'text',
  },
  '--gds-input-font-weight': {
    control: 'text',
  },
  '--gds-input-border': {
    control: 'text',
  },
  '--gds-input-padding': {
    control: 'text',
  },
  '--gds-input-border-radius': {
    control: 'text',
  },
  '--gds-input-color': {
    control: 'text',
  },
  '--gds-input-background': {
    control: 'text',
  },
  '--gds-input-font-size': {
    control: 'text',
  },
  '--gds-select-input-padding-right': {
    control: 'text',
  },
  '--gds-select-arrow-padding-right': {
    control: 'text',
  },
  '--gds-select-arrow-image': {
    control: 'text',
  },
  '--gds-select-arrow-size': {
    control: 'text',
  },
  '--gds-select-arrow-position': {
    control: 'text',
  },
  '--gds-textarea-input-resize': {
    control: 'text',
  },
  '--gds-input-placeholder-color': {
    control: 'text',
  },
  '--gds-input-border-focus': {
    control: 'text',
  },
}
