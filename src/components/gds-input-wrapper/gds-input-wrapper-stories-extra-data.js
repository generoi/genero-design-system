import { html } from 'lit-html'
// Adding all css variables related to input here would keep the main stories file a little cleaner
// TODO: add the other variables
// prettier-ignore
export const StyleTag = (args) => html`
    <style>
        :root {
            --gds-input-background:${args['--gds-input-background']}
        }
    </style>
`;

export const CssControls = {
  '--gds-input-background': {
    control: {
      type: 'text',
    },
  },
}

export const CssArgs = {
  '--gds-input-background': '',
}
