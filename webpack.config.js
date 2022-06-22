const path = require('path');

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

var cssRules = require('vtk.js/Utilities/config/dependency.js').webpack.css.rules;


// const example = process.env['EXAMPLE'].replace(/[\/]|\.\./g, '') || 'cone.js';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.(png|jpg)$/, type: 'asset' },
      { test: /\.svg$/, type: 'asset/source' },
      { test: /\.html$/, loader: 'html-loader' },
    ].concat(vtkRules, cssRules),
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    hot: false,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true,
    },
  },
  
};
