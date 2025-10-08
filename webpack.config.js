const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/',
      },
      {
        directory: path.join(
            __dirname,
            'node_modules',
            '@pdftron',
            'webviewer',
            'public',
        ),
        publicPath: '/lib/webviewer',
      }
    ],
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin({
        patterns: [
          {
            from: './node_modules/@pdftron/webviewer/public',
            to: './lib/webviewer'
          },
        ],
      },
    ),
  ],
};
