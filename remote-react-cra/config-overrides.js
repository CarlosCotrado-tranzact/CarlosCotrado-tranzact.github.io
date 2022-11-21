/* eslint-disable no-param-reassign */
/* config-overrides.js */
const { ModuleFederationPlugin } = require('webpack').container

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: 'remoteReactCra',
      filename: 'remoteEntry.js',
      exposes: {
        './Container': './src/container/Main/index.ts'
      },
      shared: {
        '@emotion/react': '^11.10.5',
        '@emotion/styled': '^11.10.5',
        react: {
          singleton: true,
          requiredVersion: '^18.2.0'
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0'
        },
        '@mui/icons-material': {
          singleton: true,
          requiredVersion: '^5.10.3'
        },
        '@mui/material': {
          singleton: true,
          requiredVersion: '^5.10.14'
        },
        '@mui/x-data-grid': {
          singleton: true,
          requiredVersion: '^5.17.0'
        }
      }
    })
  ]

  config.output.publicPath = 'auto'
  return config
}
