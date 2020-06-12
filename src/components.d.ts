/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'
export namespace Components {
  interface GdsButton {
    disabled: boolean
  }
  interface GdsMediaCard {
    heading: string
  }
}
declare global {
  interface HTMLGdsButtonElement extends Components.GdsButton, HTMLStencilElement {}
  var HTMLGdsButtonElement: {
    prototype: HTMLGdsButtonElement
    new (): HTMLGdsButtonElement
  }
  interface HTMLGdsMediaCardElement extends Components.GdsMediaCard, HTMLStencilElement {}
  var HTMLGdsMediaCardElement: {
    prototype: HTMLGdsMediaCardElement
    new (): HTMLGdsMediaCardElement
  }
  interface HTMLElementTagNameMap {
    'gds-button': HTMLGdsButtonElement
    'gds-media-card': HTMLGdsMediaCardElement
  }
}
declare namespace LocalJSX {
  interface GdsButton {
    disabled?: boolean
  }
  interface GdsMediaCard {
    heading?: string
  }
  interface IntrinsicElements {
    'gds-button': GdsButton
    'gds-media-card': GdsMediaCard
  }
}
export { LocalJSX as JSX }
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'gds-button': LocalJSX.GdsButton & JSXBase.HTMLAttributes<HTMLGdsButtonElement>
      'gds-media-card': LocalJSX.GdsMediaCard & JSXBase.HTMLAttributes<HTMLGdsMediaCardElement>
    }
  }
}
