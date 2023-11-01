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
      template: './src/pug/product-card-pyramid-strawberry-panna-cotta.pug',
      filename: './product-card-pyramid-strawberry-panna-cotta.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-siberian-berries.pug',
      filename: './product-card-pyramid-siberian-berries.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-ginger-tropic.pug',
      filename: './product-card-pyramid-ginger-tropic.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-green-wind.pug',
      filename: './product-card-pyramid-green-wind.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-forest-meditation.pug',
      filename: './product-card-pyramid-forest-meditation.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-milk-oolong.pug',
      filename: './product-card-pyramid-milk-oolong.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-russian-breakfast.pug',
      filename: './product-card-pyramid-russian-breakfast.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking', 
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-pyramid-earl-grey.pug',
      filename: './product-card-pyramid-earl-grey.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-earl-grey.pug',
      filename: './product-card-dellipack-earl-grey.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-jasmine-emerald.pug',
      filename: './product-card-dellipack-jasmine-emerald.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-mountain-thyme.pug',
      filename: './product-card-dellipack-mountain-thyme.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-oriental-bloom.pug',
      filename: './product-card-dellipack-oriental-bloom.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-fruit-magenta.pug',
      filename: './product-card-dellipack-fruit-magenta.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-rooibush-orange.pug',
      filename: './product-card-dellipack-rooibush-orange.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-assorti.pug',
      filename: './product-card-dellipack-assorti.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-english-breakfast.pug',
      filename: './product-card-dellipack-english-breakfast.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-kenya-sapphire.pug',
      filename: './product-card-dellipack-kenya-sapphire.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-red-meadow.pug',
      filename: './product-card-dellipack-red-meadow.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-milk-oolong.pug',
      filename: './product-card-dellipack-milk-oolong.html',   // куда компилировать
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
