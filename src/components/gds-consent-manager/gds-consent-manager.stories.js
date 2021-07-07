import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/ConsentManager',
  component: 'gds-consent-manager',
}

// prettier-ignore
const OptionsTemplate = args => {
  return html`
    <gds-accordion
      ?content-floats="${args.contentFloats}"
      ?open-on-hover="${args.openOnHover}"
      ?expanded=${args.expanded}
    >
      <gds-label slot="label">Label</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Content</gds-paragraph>
      </div>
    </gds-accordion>
    <p>If the accordion content floats this will be covered</p>
    <style>
      :root {
        --gds-accordion-background:${args['--gds-accordion-background']};
        --gds-accordion-border:${args['--gds-accordion-border']};
        --gds-accordion-border-radius:${args['--gds-accordion-border-radius']};
        --gds-accordion-box-shadow:${args['--gds-accordion-box-shadow']};
        --gds-accordion-color:${args['--gds-accordion-color']};
        --gds-accordion-content-background:${args['--gds-accordion-content-background']};
        --gds-accordion-expanded-header-background:${args['--gds-accordion-expanded-header-background']};
        --gds-accordion-header-padding:${args['--gds-accordion-header-padding']};
        --gds-accordion-heading-margin-left:${args['--gds-accordion-heading-margin-left']};
        --gds-accordion-justify-content:${args['--gds-accordion-justify-content']};
        --gds-accordion-outline-focus:${args['--gds-accordion-outline-focus']};
        --gds-accordion-padding:${args['--gds-accordion-padding']};
      }
    </style>
  `
}
export const Options = OptionsTemplate.bind({})
Options.argTypes = {
  '--gds-accordion-background': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-border': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-border-radius': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-box-shadow': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-color': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-content-background': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-expanded-header-background': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-header-padding': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-heading-margin-left': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-justify-content': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-outline-focus': {
    control: {
      type: 'text',
    },
  },
  '--gds-accordion-padding': {
    control: {
      type: 'text',
    },
  },
}

export const Examples = () => html`
  <div>
    <gds-accordion>
      <gds-label slot="label">This is an accordion</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Some content</gds-paragraph>
        <gds-paragraph>Can be put here.</gds-paragraph>
      </div>
    </gds-accordion>
    <br />

    <gds-accordion open-on-hover="true">
      <gds-label slot="label">Opens on hover (desktop only)</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Some content</gds-paragraph>
        <gds-paragraph>Can be put here.</gds-paragraph>
      </div>
    </gds-accordion>
    <br />

    <gds-accordion content-floats="true">
      <gds-label slot="label">Has floating content</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Some content</gds-paragraph>
        <gds-paragraph>Can be put here.</gds-paragraph>
      </div>
    </gds-accordion>
    <br />

    <gds-accordion expanded>
      <gds-label slot="label">Can be open by default</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Some content</gds-paragraph>
      </div>
    </gds-accordion>
    <br />

    <style>
      .custom {
        --gds-accordion-border: 1px solid black;
        --gds-accordion-border-radius: 0;
        --gds-accordion-box-shadow: 0;
        --gds-paragraph-gutter: var(--gds-spacing-xs);
      }
    </style>
    <gds-accordion class="custom">
      <gds-label slot="label">Customize with css variables</gds-label>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-paragraph>Some content</gds-paragraph>
        <gds-paragraph>Can be put here.</gds-paragraph>
      </div>
    </gds-accordion>
    <br />

    <style>
      .plain {
        --gds-accordion-color: inherit;
        --gds-accordion-background: var(--gds-color-white);
        --gds-accordion-content-background: var(--gds-color-white);
        --gds-accordion-expanded-header-background: transparent;
        --gds-accordion-border: none;
        --gds-accordion-border-radius: none;
        --gds-accordion-box-shadow: none;
        --gds-accordion-padding: var(--gds-spacing-s) 0;
        --gds-accordion-header-padding: 0;
        --gds-accordion-justify-content: start;
      }
      .plain > gds-text {
        text-decoration: underline;
      }
    </style>
    <gds-accordion class="plain">
      <gds-text slot="label" size="s">Plain text accordion</gds-text>
      <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
      <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
      <div slot="content">
        <gds-text size="s">Some content</gds-text>
      </div>
    </gds-accordion>
  </div>
`
