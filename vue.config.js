export default {
  title: 'Homie Dashboard',
  entry: './app/index.js',
  static: {
    from: './app/static'
  },
  dist: './dist-app',
  template: './app/index.html',
  notify: true,
  resolve: true,
  vendor: ['axios', 'eva.js', 'eventemitter3', 'fast-json-patch', 'uuid', 'vue', 'vue-color', 'vue-grid-layout/dist/vue-grid-layout.min.js'],
  mergeConfig: {
    performance: {
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      },
      maxEntrypointSize: 500000,
      maxAssetSize: 400000
    }
  }
}
