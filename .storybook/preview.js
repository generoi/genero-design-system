/* global window */

import {
  configure,
  addParameters,
} from '@storybook/web-components';

import { defineCustomElements } from "../dist/esm/loader.mjs"
defineCustomElements()

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

configure(require.context('../src', true, /.*\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
