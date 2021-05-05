/* global window */

import '../src/styles/index.scss'

import { defineCustomElements } from "../dist/esm/loader.js"
import { setCustomElements } from "@storybook/web-components"
import customElements from "../custom-elements.json"

setCustomElements(customElements)
defineCustomElements()

export const parameters = {
    backgrounds: {
        disable: true,
    },
    controls: {
        hideNoControlsWarning: true,
        expanded: true,
      }
}