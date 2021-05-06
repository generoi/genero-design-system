import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/Accordion',
  component: 'gds-accordion',
}

const Template = (args) => {
  return html`
  <gds-accordion ?open-on-hover=${args.openOnHover} ?content-floats=${args.contentFloats} ?expanded=${args.expanded}>
    <gds-label slot="label">title</gds-label>
    <gds-icon slot="icon-collapse" name="caret-circle-up" regular></gds-icon>
    <gds-icon slot="icon-expand" name="caret-circle-down" regular></gds-icon>
    <div slot="content">
      <gds-paragraph>content</gds-paragraph>
    </div>
  </gds-accordion>
  <gds-paragraph>sibling</gds-paragraph>
  <style>
  :root {
    --gds-accordion-color:${args.gdsAccordionColor};
    --gds-accordion-background:${args.gdsAccordionBackground};
    --gds-accordion-border:${args.gdsAccordionBorder};
    --gds-accordion-border-radius:${args.gdsAccordionBorderRadius};
    --gds-accordion-box-shadow:${args.gdsAccordionBoxShadow};
    --gds-accordion-content-background:${args.gdsAccordionContentBackground};
    --gds-accordion-padding:${args.gdsAccordionPadding};
    --gds-accordion-box-shadow:${args.gdsAccordionBoxShadow};
    --gds-accordion-justify-content:${args.gdsAccordionJustifyContent};
    --gds-accordion-header-padding:${args.gdsAccordionHeaderPadding};
    --gds-accordion-outline-focus:${args.gdsAccordionOutlineFocus};
    --gds-accordion-heading-margin-left:${args.gdsAccordionHeadingMarginLeft};
    --gds-accordion-expanded-header-background:${args.gdsAccordionExpandedHeaderBackground};
  }
  </style>
  `;
};
export const Options = Template.bind({});
Options.args  = {
  openOnHover: false,
  contentFloats: false,
  expanded: false,
  slotLabel: '',
  slotIconCollapse: '',
  slotIconExpand: '',
  slotContent: '',
  gdsAccordionBackground: '',
  gdsAccordionBorder: '',
  gdsAccordionBorderRadius: '',
  gdsAccordionBoxShadow: '',
  gdsAccordionColor: '',
  gdsAccordionContentBackground: '',
  gdsAccordionExpandedHeaderBackground: '',
  gdsAccordionHeaderPadding: '',
  gdsAccordionHeadingMarginLeft: '',
  gdsAccordionJustifyContent: '',
  gdsAccordionOutlineFocus: '',
  gdsAccordionPadding: '',
}
Options.argTypes = {
  openOnHover: {
    description: 'Opens automatically when hovered (desktop only).',
    table: {
      type: {
        summary: 'open-on-hover',
        detail: '<gds-accordion open-on-hover></gds-accordion>',
      },
      defaultValue : {
        summary: 'false',
      },
      category: 'Props',
    },
  },
  contentFloats: {
    description: 'Content floats.',
    table: {
      type: {
        summary: 'content-floats',
        detail: '<gds-accordion content-floats></gds-accordion>',
      },
      defaultValue : {
        summary: 'false',
      },
      category: 'Props',
    },
  },
  expanded: {
    description: 'Keeps track of when the user has actively collapsed or expanded the accordion.',
    table: {
      type: {
        summary: 'expanded',
        detail: '<gds-accordion expanded></gds-accordion>',
      },
      defaultValue : {
        summary: 'false',
      },
      category: 'Props',
    },
  },
  slotLabel: {
    table: {
      type: {
        summary: 'slot="label"',
        detail: '<gds-accordion><p slot="label">label</p></gds-accordion>',
      },
      category: 'Slots',
    },
    control: false,
  },
  slotIconCollapse: {
    table: {
      type: {
        summary: 'slot="icon-collapse"',
        detail: '<gds-accordion><i slot="icon-collapse">icon</i></gds-accordion>',
      },
      category: 'Slots',
    },
    control: false,
  },
  slotIconExpand: {
    table: {
      type: {
        summary: 'slot="icon-expand"',
        detail: '<gds-accordion><i slot="icon-expand">icon</i></gds-accordion>',
      },
      category: 'Slots',
    },
    control: false,
  },
  slotContent: {
    table: {
      type: {
        summary: 'slot="content"',
        detail: '<gds-accordion><p slot="content">content</p></gds-accordion>',
      },
      category: 'Slots',
    },
    control: false,
  },
  gdsAccordionBackground: {
    table: {
      type: {
        summary: '--gds-accordion-background',
      },
      defaultValue: {
        summary: 'var(--gds-color-white)',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionBorder: {
    table: {
      type: {
        summary: '--gds-accordion-border',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionBorderRadius: {
    table: {
      type: {
        summary: '--gds-accordion-border-radius',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionBoxShadow: {
    table: {
      type: {
        summary: '--gds-accordion-box-shadow',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionColor: {
    table: {
      type: {
        summary: '--gds-accordion-color',
      },
      defaultValue: {
        summary: 'inherit',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionContentBackground: {
    table: {
      type: {
        summary: '--gds-accordion-content-background',
      },
      defaultValue: {
        summary: 'var(--gds-color-white)',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionExpandedHeaderBackground: {
    table: {
      type: {
        summary: '--gds-accordion-expanded-header-background',
      },
      defaultValue: {
        summary: 'var(--gds-color-white)',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionHeaderPadding: {
    table: {
      type: {
        summary: '--gds-accordion-header-padding',
      },
      defaultValue: {
        summary: 'var(--gds-accordion-padding)',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionHeadingMarginLeft:{
    table: {
      type: {
        summary: '--gds-accordion-heading-margin-left',
      },
      defaultValue: {
        summary: 'var(--gds-spacing-2xs)',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionJustifyContent: {
    table: {
      type: {
        summary: '--gds-accordion-justify-content',
      },
      defaultValue: {
        summary: 'space-between',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionOutlineFocus: {
    table: {
      type: {
        summary: '--gds-accordion-outline-focus',
      },
      category: 'CSS Variable',
    },
  },
  gdsAccordionPadding: {
    table: {
      type: {
        summary: '--gds-accordion-padding',
      },
      defaultValue: {
        summary: 'var(--gds-spacing-s)',
      },
      category: 'CSS Variable',
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
