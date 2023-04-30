const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/wildlife-save/dist/'
})

module.exports = {
  configureWebpack: config => {
    config.performance = {
      maxEntrypointSize: 10000000,
      maxAssetSize: 40000000
    }
  },

  publicPath: '/wildlife-save/dist/'
}
