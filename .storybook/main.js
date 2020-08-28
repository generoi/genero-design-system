const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
    }
  }],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })

    return config;
  },
}
