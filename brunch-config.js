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
        mode: 'native',
        includePaths: [
          'node_modules/tachyons/css'
        ],
        precision: 8,
        sourceMapEmbed: true
      }
    },
    digest: {
     pattern: /DIGEST\(\/?([^\)]*)\)/g,
     discardNonFilenamePatternParts: true,
     referenceFiles: /\.html$/,
     precision: 8,
     alwaysRun: false,
     environments: ['production'],
     prependHost: null,
     manifest: '',
     infixes: []
   }
  }
};
