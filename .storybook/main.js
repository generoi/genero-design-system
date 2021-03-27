const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    },
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
  ],
}
