'use strict'

// const path = require('path')

const presets = [
  ['@babel/preset-env', {
    'modules': false
  }],
  ['@babel/preset-react',]
  // {
  //
  // }
]

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '~': './src/components',
      }
    }
  ],
  [
    '@babel/plugin-syntax-dynamic-import'
  ]
  // ["@babel/proposal-object-rest-spread"]
]

module.exports = { presets, plugins }
