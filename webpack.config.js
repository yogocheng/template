const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('./config/proxy')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: './index.html'
    })
  ],
  stats: {
    children: false,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts'], // 默认解析扩展文件
  },
  devServer: {
    stats: 'errors-only', //  'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
    compress: true, // gzip 压缩
		contentBase: './dist',
    host: '0.0.0.0',
    progress: true,
    useLocalIp: true, //允许使用ip打开
    port: 8080,
    hot: true,
    proxy,
	},
}