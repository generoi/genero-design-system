const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    '@panosvoudouris/addon-versions',
    '@storybook/addon-a11y',
  ],
}
