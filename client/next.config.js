const withCSS = require('@zeit/next-css')
const internalReactToolboxDeps = /react-toolbox(?!.*node_modules)/
const externalReactToolboxDeps = /node_modules(?!\/react-toolbox(?!.*node_modules))/

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  },

 webpack: (config, { dev, defaultLoaders }) => {
   config.resolve.symlinks = false
   config.externals = config.externals.map(external => {
       if (typeof external !== 'function') return external
       return (ctx, req, cb) => (internalReactToolboxDeps.test(req) ? cb() : external(ctx, req, cb))
   })
   config.module.rules.push({
      test: /\.jsx?$/,
      loader: defaultLoaders.babel,
      include: [internalReactToolboxDeps],
   })

   // Fixes npm packages that depend on `fs` module
   config.node = {
     fs: 'empty'
   }
   return config
  },
  webpackDevMiddleware: config => {
    const ignored = [config.watchOptions.ignored[0], externalReactToolboxDeps]
    config.watchOptions.ignored = ignored
    return config
  },
})
