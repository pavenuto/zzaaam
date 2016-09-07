module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015']},
    sass: {
      options: {
        mode: 'native'
        , includePaths: [
          'node_modules/normalize.css',
          'node_modules/tachyons/css'
        ]
        // Set the precision for arithmetic operations.
        , precision: 8
        // To enable embedded source maps, pass the option `sourceMapEmbed`. This is only supported in _native_ mode; Ruby Sass isn't supported.
        , sourceMapEmbed: true
      }
    }
  }
};
