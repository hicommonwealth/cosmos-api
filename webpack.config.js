// Modifications copyright (C) 2019 Commonwealth Labs

const config = {
  devtool: "cheap-source-map",
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/lib',
    filename: 'cosmos.js',
    library: 'cosmos-js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
module.exports = config;
