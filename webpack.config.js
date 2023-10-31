const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = { 
  devServer: {
    port: 8800,
  },
  devtool: 'source-map',
  // entry: {
  //   entry: {
  //     index: './index',  // на случай если 2 точки входа (файла js) и нужно сделать их раздельными
  //     shop: './shop'
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
    assetModuleFilename: "img/[name][ext][query]", // [name] или [hash], путь куда сохранять изображения
    clean: true, // очищает папку dist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,  // отключаем минификацию html
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        // loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
        use:[
          {
            loader: 'html-loader',
            options: {
              minimize: false,  // отключаем минификацию html
            },
          },
          {
            loader: 'pug-html-loader', // чтобы нормально подтягивало картинки и собирало
            options: {
              exports: false,
              pretty : true,  // не минифицировать
            }
          }
          
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/i, // 
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'svg/[name][ext]',  // указываем путь сборки
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',  // указываем путь сборки
        }
      },
      // {
      //   test: /\.(webmanifest)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'webmanifest/', // копируем файл webmanifest
      //       },
      //     },
      //   ],
      // }

    ],
  },
  plugins: [ 
    new HtmlWebPackPlugin({
      template: './src/pug/index.pug',
      filename: './index.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/contacts.pug',
      filename: './contacts.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/about-brand.pug',
      filename: './about-brand.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/in-development.pug',
      filename: './in-development.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/catalog.pug',
      filename: './catalog.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/catalog-pyramid.pug',
      filename: './catalog-pyramid.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/catalog-dellipack-per-cup.pug',
      filename: './catalog-dellipack-per-cup.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-strawberry-panna-cotta.pug',
      filename: './product-card-strawberry-panna-cotta.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    
    
    
    new MiniCssExtractPlugin({
      filename: 'css/main.css', // куда компилировать
      chunkFilename: '[id].css',
    }),

    // new ImageminWebpWebpackPlugin({
    //   config: [{
    //     test: /.(jpe?g|png)/,
    //     options: {
    //       quality: 90,
    //     },
    //   }],
    //   overrideExtension: true,
    //   detailedLogs: false,
    //   silent: false,
    //   strict: true,
    // }),

    new CopyWebpackPlugin({
      patterns: [ 
        { from: 'src/img/baloon.png', to: 'img' },
      ],
    }),
  ],
};
