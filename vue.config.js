const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: config => {
    config.performance = {
      maxEntrypointSize: 10000000,
      maxAssetSize: 40000000
    }
  }
}
