import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/Accordion',
  component: 'gds-accordion',
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
        --accordion-border: 1px solid black;
        --accordion-border-radius: 0;
        --accordion-box-shadow: 0;
        --paragraph-gutter: var(--spacing-xs);
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
        --accordion-color: inherit;
        --accordion-background: var(--color-white);
        --accordion-content-background: var(--color-white);
        --accordion-expanded-header-background: transparent;
        --accordion-border: none;
        --accordion-border-radius: none;
        --accordion-box-shadow: none;
        --accordion-padding: var(--spacing-s) 0;
        --accordion-header-padding: 0;
        --accordion-justify-content: start;
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
