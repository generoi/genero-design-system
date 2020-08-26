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
        /**
          * Left side icon with a font. https://www.martinstoeckli.ch/fontmap/fontmap.html
         */
        "leftIcon": string;
        "leftIconRotate": number;
        /**
          * Right side icon with a font.
         */
        "rightIcon": string;
        "rightIconRotate": number;
        /**
          * Button size.
         */
        "size": string;
        /**
          * Is a textual button.
         */
        "text": boolean;
    }
    interface GdsCard {
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
        /**
          * Size of the label.
         */
        "size": string;
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
          * Overlay.
         */
        "overlay": boolean;
        /**
          * Overlay effect.
         */
        "overlayEffect": string;
        "superimposedBottom": string;
        "superimposedLeft": string;
        "superimposedRight": string;
        /**
          * superimpose image overflow amount in pixels.
         */
        "superimposedTop": string;
        /**
          * superimpose image url.
         */
        "superimposedUrl": string;
        /**
          * Link open target.
         */
        "target": string;
    }
    interface GdsMenu {
        /**
          * Direction: "horizontal" or "vertial". Defaults to "vertical".
         */
        "direction": string;
    }
    interface GdsMenuItem {
        /**
          * Is menu item appear active.
         */
        "active": boolean;
    }
    interface GdsNavigation {
        /**
          * Does the navigation appear as transparent.
         */
        "transparent": boolean;
    }
    interface GdsParagraph {
        /**
          * Use to override p element's style.
         */
        "class": string;
        /**
          * Size of the text.
         */
        "size": string;
    }
    interface GdsTag {
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
    interface HTMLGdsCardElement extends Components.GdsCard, HTMLStencilElement {
    }
    var HTMLGdsCardElement: {
        prototype: HTMLGdsCardElement;
        new (): HTMLGdsCardElement;
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
    interface HTMLGdsMenuElement extends Components.GdsMenu, HTMLStencilElement {
    }
    var HTMLGdsMenuElement: {
        prototype: HTMLGdsMenuElement;
        new (): HTMLGdsMenuElement;
    };
    interface HTMLGdsMenuItemElement extends Components.GdsMenuItem, HTMLStencilElement {
    }
    var HTMLGdsMenuItemElement: {
        prototype: HTMLGdsMenuItemElement;
        new (): HTMLGdsMenuItemElement;
    };
    interface HTMLGdsNavigationElement extends Components.GdsNavigation, HTMLStencilElement {
    }
    var HTMLGdsNavigationElement: {
        prototype: HTMLGdsNavigationElement;
        new (): HTMLGdsNavigationElement;
    };
    interface HTMLGdsParagraphElement extends Components.GdsParagraph, HTMLStencilElement {
    }
    var HTMLGdsParagraphElement: {
        prototype: HTMLGdsParagraphElement;
        new (): HTMLGdsParagraphElement;
    };
    interface HTMLGdsTagElement extends Components.GdsTag, HTMLStencilElement {
    }
    var HTMLGdsTagElement: {
        prototype: HTMLGdsTagElement;
        new (): HTMLGdsTagElement;
    };
    interface HTMLElementTagNameMap {
        "gds-button": HTMLGdsButtonElement;
        "gds-card": HTMLGdsCardElement;
        "gds-heading": HTMLGdsHeadingElement;
        "gds-label": HTMLGdsLabelElement;
        "gds-link": HTMLGdsLinkElement;
        "gds-logo-grid": HTMLGdsLogoGridElement;
        "gds-logo-grid-item": HTMLGdsLogoGridItemElement;
        "gds-media-card": HTMLGdsMediaCardElement;
        "gds-menu": HTMLGdsMenuElement;
        "gds-menu-item": HTMLGdsMenuItemElement;
        "gds-navigation": HTMLGdsNavigationElement;
        "gds-paragraph": HTMLGdsParagraphElement;
        "gds-tag": HTMLGdsTagElement;
    }
}
declare namespace LocalJSX {
    interface GdsButton {
        "disabled"?: boolean;
        /**
          * Left side icon with a font. https://www.martinstoeckli.ch/fontmap/fontmap.html
         */
        "leftIcon"?: string;
        "leftIconRotate"?: number;
        /**
          * Right side icon with a font.
         */
        "rightIcon"?: string;
        "rightIconRotate"?: number;
        /**
          * Button size.
         */
        "size"?: string;
        /**
          * Is a textual button.
         */
        "text"?: boolean;
    }
    interface GdsCard {
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
        /**
          * Size of the label.
         */
        "size"?: string;
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
          * Overlay.
         */
        "overlay"?: boolean;
        /**
          * Overlay effect.
         */
        "overlayEffect"?: string;
        "superimposedBottom"?: string;
        "superimposedLeft"?: string;
        "superimposedRight"?: string;
        /**
          * superimpose image overflow amount in pixels.
         */
        "superimposedTop"?: string;
        /**
          * superimpose image url.
         */
        "superimposedUrl"?: string;
        /**
          * Link open target.
         */
        "target"?: string;
    }
    interface GdsMenu {
        /**
          * Direction: "horizontal" or "vertial". Defaults to "vertical".
         */
        "direction"?: string;
    }
    interface GdsMenuItem {
        /**
          * Is menu item appear active.
         */
        "active"?: boolean;
    }
    interface GdsNavigation {
        /**
          * Does the navigation appear as transparent.
         */
        "transparent"?: boolean;
    }
    interface GdsParagraph {
        /**
          * Use to override p element's style.
         */
        "class"?: string;
        /**
          * Size of the text.
         */
        "size"?: string;
    }
    interface GdsTag {
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
        "gds-card": GdsCard;
        "gds-heading": GdsHeading;
        "gds-label": GdsLabel;
        "gds-link": GdsLink;
        "gds-logo-grid": GdsLogoGrid;
        "gds-logo-grid-item": GdsLogoGridItem;
        "gds-media-card": GdsMediaCard;
        "gds-menu": GdsMenu;
        "gds-menu-item": GdsMenuItem;
        "gds-navigation": GdsNavigation;
        "gds-paragraph": GdsParagraph;
        "gds-tag": GdsTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gds-button": LocalJSX.GdsButton & JSXBase.HTMLAttributes<HTMLGdsButtonElement>;
            "gds-card": LocalJSX.GdsCard & JSXBase.HTMLAttributes<HTMLGdsCardElement>;
            "gds-heading": LocalJSX.GdsHeading & JSXBase.HTMLAttributes<HTMLGdsHeadingElement>;
            "gds-label": LocalJSX.GdsLabel & JSXBase.HTMLAttributes<HTMLGdsLabelElement>;
            "gds-link": LocalJSX.GdsLink & JSXBase.HTMLAttributes<HTMLGdsLinkElement>;
            "gds-logo-grid": LocalJSX.GdsLogoGrid & JSXBase.HTMLAttributes<HTMLGdsLogoGridElement>;
            "gds-logo-grid-item": LocalJSX.GdsLogoGridItem & JSXBase.HTMLAttributes<HTMLGdsLogoGridItemElement>;
            "gds-media-card": LocalJSX.GdsMediaCard & JSXBase.HTMLAttributes<HTMLGdsMediaCardElement>;
            "gds-menu": LocalJSX.GdsMenu & JSXBase.HTMLAttributes<HTMLGdsMenuElement>;
            "gds-menu-item": LocalJSX.GdsMenuItem & JSXBase.HTMLAttributes<HTMLGdsMenuItemElement>;
            "gds-navigation": LocalJSX.GdsNavigation & JSXBase.HTMLAttributes<HTMLGdsNavigationElement>;
            "gds-paragraph": LocalJSX.GdsParagraph & JSXBase.HTMLAttributes<HTMLGdsParagraphElement>;
            "gds-tag": LocalJSX.GdsTag & JSXBase.HTMLAttributes<HTMLGdsTagElement>;
        }
    }
}
