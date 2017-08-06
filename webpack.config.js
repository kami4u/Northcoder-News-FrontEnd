const path = require('path');

const PATHS = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src')
};

module.exports = {
  entry: PATHS.entry,
  output: {
    filename: 'bundle.js',
    path: PATHS.public
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|svg|eot)$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
    contentBase: PATHS.public,
    port: 4000,
    historyApiFallback: true,
    publicPath: '/'
  }
};