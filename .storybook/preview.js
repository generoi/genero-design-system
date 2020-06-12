/* global window */

import {
  addParameters,
} from '@storybook/web-components';

import { defineCustomElements } from "../dist/esm/loader.mjs"
defineCustomElements()

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

