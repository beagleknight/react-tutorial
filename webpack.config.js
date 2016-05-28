module.exports = {
  entry: './src/entry.js',

  output: {
    path: __dirname + '/dist', // __dirname current folder
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
