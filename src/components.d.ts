/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GdsButton {
        "disabled": boolean;
    }
    interface GdsHeading {
        /**
          * Render the heading as a h element for SEO purposes.  Those h element should be visible to GoogleBot: https://www.searchenginejournal.com/shadow-dom/353644/
         */
        "as": string;
        /**
          * Size of the heading.
         */
        "size": string;
    }
    interface GdsLabel {
        /**
          * Text color. TODO: Implement the color custom variable scheme.
         */
        "color": string;
    }
    interface GdsLink {
        "block": boolean;
        /**
          * Link url.
         */
        "href": string;
        /**
          * Link open target.
         */
        "target": string;
    }
    interface GdsLogoGrid {
    }
    interface GdsLogoGridItem {
        /**
          * If defined, the logo will be a link.
         */
        "href": string;
        /**
          * Image url.
         */
        "imageUrl": string;
        /**
          * Link open target.
         */
        "target": string;
    }
    interface GdsMediaCard {
        /**
          * TODO: implement this.
         */
        "description": string;
        /**
          * Title for the card (note: title is a reserved word).
         */
        "headline": string;
        /**
          * If defined, the card will be a link.
         */
        "href": string;
        /**
          * Image url.
         */
        "imageUrl": string;
        /**
          * Superimposed image fit. TODO: implement this.
         */
        "superimposedImageFit": string;
        /**
          * Superimposed image url. TODO: implement this.
         */
        "superimposedImageUrl": string;
        /**
          * Link open target.
         */
        "target": string;
    }
    interface GdsTag {
        /**
          * Tag background color. TODO: Implement the color custom variable scheme.
         */
        "backgroundColor": string;
        /**
          * Color for the tag text. TODO: Implement the color custom variable scheme.
         */
        "color": string;
        /**
          * If defined, the tag will be a link.
         */
        "href": string;
        /**
          * Link open target.
         */
        "target": string;
    }
}
declare global {
    interface HTMLGdsButtonElement extends Components.GdsButton, HTMLStencilElement {
    }
    var HTMLGdsButtonElement: {
        prototype: HTMLGdsButtonElement;
        new (): HTMLGdsButtonElement;
    };
    interface HTMLGdsHeadingElement extends Components.GdsHeading, HTMLStencilElement {
    }
    var HTMLGdsHeadingElement: {
        prototype: HTMLGdsHeadingElement;
        new (): HTMLGdsHeadingElement;
    };
    interface HTMLGdsLabelElement extends Components.GdsLabel, HTMLStencilElement {
    }
    var HTMLGdsLabelElement: {
        prototype: HTMLGdsLabelElement;
        new (): HTMLGdsLabelElement;
    };
    interface HTMLGdsLinkElement extends Components.GdsLink, HTMLStencilElement {
    }
    var HTMLGdsLinkElement: {
        prototype: HTMLGdsLinkElement;
        new (): HTMLGdsLinkElement;
    };
    interface HTMLGdsLogoGridElement extends Components.GdsLogoGrid, HTMLStencilElement {
    }
    var HTMLGdsLogoGridElement: {
        prototype: HTMLGdsLogoGridElement;
        new (): HTMLGdsLogoGridElement;
    };
    interface HTMLGdsLogoGridItemElement extends Components.GdsLogoGridItem, HTMLStencilElement {
    }
    var HTMLGdsLogoGridItemElement: {
        prototype: HTMLGdsLogoGridItemElement;
        new (): HTMLGdsLogoGridItemElement;
    };
    interface HTMLGdsMediaCardElement extends Components.GdsMediaCard, HTMLStencilElement {
    }
    var HTMLGdsMediaCardElement: {
        prototype: HTMLGdsMediaCardElement;
        new (): HTMLGdsMediaCardElement;
    };
    interface HTMLGdsTagElement extends Components.GdsTag, HTMLStencilElement {
    }
    var HTMLGdsTagElement: {
        prototype: HTMLGdsTagElement;
        new (): HTMLGdsTagElement;
    };
    interface HTMLElementTagNameMap {
        "gds-button": HTMLGdsButtonElement;
        "gds-heading": HTMLGdsHeadingElement;
        "gds-label": HTMLGdsLabelElement;
        "gds-link": HTMLGdsLinkElement;
        "gds-logo-grid": HTMLGdsLogoGridElement;
        "gds-logo-grid-item": HTMLGdsLogoGridItemElement;
        "gds-media-card": HTMLGdsMediaCardElement;
        "gds-tag": HTMLGdsTagElement;
    }
}
declare namespace LocalJSX {
    interface GdsButton {
        "disabled"?: boolean;
    }
    interface GdsHeading {
        /**
          * Render the heading as a h element for SEO purposes.  Those h element should be visible to GoogleBot: https://www.searchenginejournal.com/shadow-dom/353644/
         */
        "as"?: string;
        /**
          * Size of the heading.
         */
        "size"?: string;
    }
    interface GdsLabel {
        /**
          * Text color. TODO: Implement the color custom variable scheme.
         */
        "color"?: string;
    }
    interface GdsLink {
        "block"?: boolean;
        /**
          * Link url.
         */
        "href"?: string;
        /**
          * Link open target.
         */
        "target"?: string;
    }
    interface GdsLogoGrid {
    }
    interface GdsLogoGridItem {
        /**
          * If defined, the logo will be a link.
         */
        "href"?: string;
        /**
          * Image url.
         */
        "imageUrl"?: string;
        /**
          * Link open target.
         */
        "target"?: string;
    }
    interface GdsMediaCard {
        /**
          * TODO: implement this.
         */
        "description"?: string;
        /**
          * Title for the card (note: title is a reserved word).
         */
        "headline"?: string;
        /**
          * If defined, the card will be a link.
         */
        "href"?: string;
        /**
          * Image url.
         */
        "imageUrl"?: string;
        /**
          * Superimposed image fit. TODO: implement this.
         */
        "superimposedImageFit"?: string;
        /**
          * Superimposed image url. TODO: implement this.
         */
        "superimposedImageUrl"?: string;
        /**
          * Link open target.
         */
        "target"?: string;
    }
    interface GdsTag {
        /**
          * Tag background color. TODO: Implement the color custom variable scheme.
         */
        "backgroundColor"?: string;
        /**
          * Color for the tag text. TODO: Implement the color custom variable scheme.
         */
        "color"?: string;
        /**
          * If defined, the tag will be a link.
         */
        "href"?: string;
        /**
          * Link open target.
         */
        "target"?: string;
    }
    interface IntrinsicElements {
        "gds-button": GdsButton;
        "gds-heading": GdsHeading;
        "gds-label": GdsLabel;
        "gds-link": GdsLink;
        "gds-logo-grid": GdsLogoGrid;
        "gds-logo-grid-item": GdsLogoGridItem;
        "gds-media-card": GdsMediaCard;
        "gds-tag": GdsTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gds-button": LocalJSX.GdsButton & JSXBase.HTMLAttributes<HTMLGdsButtonElement>;
            "gds-heading": LocalJSX.GdsHeading & JSXBase.HTMLAttributes<HTMLGdsHeadingElement>;
            "gds-label": LocalJSX.GdsLabel & JSXBase.HTMLAttributes<HTMLGdsLabelElement>;
            "gds-link": LocalJSX.GdsLink & JSXBase.HTMLAttributes<HTMLGdsLinkElement>;
            "gds-logo-grid": LocalJSX.GdsLogoGrid & JSXBase.HTMLAttributes<HTMLGdsLogoGridElement>;
            "gds-logo-grid-item": LocalJSX.GdsLogoGridItem & JSXBase.HTMLAttributes<HTMLGdsLogoGridItemElement>;
            "gds-media-card": LocalJSX.GdsMediaCard & JSXBase.HTMLAttributes<HTMLGdsMediaCardElement>;
            "gds-tag": LocalJSX.GdsTag & JSXBase.HTMLAttributes<HTMLGdsTagElement>;
        }
    }
}
