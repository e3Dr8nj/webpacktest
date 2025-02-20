//const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export default  {
  entry: './src/js/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' },   
        {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use the template
      filename: 'index.html' // Output file name
    },
    new ESLintPlugin({
      extensions: ['js','ts'],
      context: path.resolve(__dirname, 'src') 
    })
   )
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};