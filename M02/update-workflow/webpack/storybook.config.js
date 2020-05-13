'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  // Object.assing -> cria novo objeto baseado no 2° param
  // 3° param -> sobrescreve propriedades do 2° param 
  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use
  })

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(preloaders)
  newConfig.resolve = common.resolve

  return newConfig
}
