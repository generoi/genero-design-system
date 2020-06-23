/* global window */

// NOTE: Use plain css for now. Switch to using Sass once someone get's it to load in storybook preview iframe.
import '../src/styles/index.css'

import { defineCustomElements } from "../dist/esm/loader.mjs"

defineCustomElements()

