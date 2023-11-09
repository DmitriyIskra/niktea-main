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
      template: './src/pug/catalog-dellipack-per-tea-pot.pug',
      filename: './catalog-dellipack-per-tea-pot.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/catalog-leaf-basic.pug',
      filename: './catalog-leaf-basic.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/catalog-top-selection.pug',
      filename: './catalog-top-selection.html',   // куда компилировать
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
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-mountain-thyme.pug',
      filename: './product-card-dellipack-tea-pot-mountain-thyme.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-milk-oolong.pug',
      filename: './product-card-dellipack-tea-pot-milk-oolong.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-berry-cocktail.pug',
      filename: './product-card-dellipack-tea-pot-berry-cocktail.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-earl-grey.pug',
      filename: './product-card-dellipack-tea-pot-earl-grey.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-silver-jasmine.pug',
      filename: './product-card-dellipack-tea-pot-silver-jasmine.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }), 
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-king-breakfast.pug',
      filename: './product-card-dellipack-tea-pot-king-breakfast.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-dellipack-tea-pot-sencha-classic.pug',
      filename: './product-card-dellipack-tea-pot-sencha-classic.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-jin-hao.pug',
      filename: './product-card-leaf-jin-hao.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-tie-guan-yin.pug',
      filename: './product-card-leaf-tie-guan-yin.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-da-hong-pao.pug',
      filename: './product-card-leaf-da-hong-pao.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-uzbeck-tea-95.pug',
      filename: './product-card-leaf-uzbeck-tea-95.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-georgian-green-tea-36.pug',
      filename: './product-card-leaf-georgian-green-tea-36.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-georgian-black-tea-36.pug',
      filename: './product-card-leaf-georgian-black-tea-36.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-traditional-sbiten.pug',
      filename: './product-card-leaf-traditional-sbiten.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking', 
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-healing-herbs.pug',
      filename: './product-card-leaf-healing-herbs.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-fireweed-natural.pug',
      filename: './product-card-leaf-fireweed-natural.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-creamy-oolong.pug',
      filename: './product-card-leaf-creamy-oolong.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-dian-hong.pug',
      filename: './product-card-leaf-dian-hong.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-altai-herbal-mix-3.pug',
      filename: './product-card-leaf-altai-herbal-mix-3.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-sagan-dale.pug',
      filename: './product-card-leaf-sagan-dale.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-altaic-herbs.pug',
      filename: './product-card-leaf-altaic-herbs.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-spisy-black.pug',
      filename: './product-card-leaf-spisy-black.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-altai-herbal-mix-1.pug',
      filename: './product-card-leaf-altai-herbal-mix-1.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-altai-herbal-mix-2.pug',
      filename: './product-card-leaf-altai-herbal-mix-2.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-thyme.pug',
      filename: './product-card-leaf-thyme.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-oregano.pug',
      filename: './product-card-leaf-oregano.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-currant-leaf.pug',
      filename: './product-card-leaf-currant-leaf.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-bergenia.pug',
      filename: './product-card-leaf-bergenia.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-lavander.pug',
      filename: './product-card-leaf-lavander.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-buckwheat-tea-granular.pug',
      filename: './product-card-leaf-buckwheat-tea-granular.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-cascara.pug',
      filename: './product-card-leaf-cascara.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-buckwheat-tea.pug',
      filename: './product-card-leaf-buckwheat-tea.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-butterfly-pea-flower.pug',
      filename: './product-card-leaf-butterfly-pea-flower.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-gaba-oolong.pug',
      filename: './product-card-leaf-gaba-oolong.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-rosehip.pug',
      filename: './product-card-leaf-rosehip.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-hibiscus.pug',
      filename: './product-card-leaf-hibiscus.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-leaf-rooibush.pug',
      filename: './product-card-leaf-rooibush.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-top-selection-japan-matcha-traditional.pug',
      filename: './product-card-top-selection-japan-matcha-traditional.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-top-selection-meadowsweet.pug',
      filename: './product-card-top-selection-meadowsweet.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/product-card-top-selection-cedar-powder.pug',
      filename: './product-card-top-selection-cedar-powder.html',   // куда компилировать
      minify: {
        html: false // отключаем минификацию html, еще есть версия minify: false
      },
      scriptLoading: 'blocking',
    }),
    new HtmlWebPackPlugin({
      template: './src/pug/recipes.pug',
      filename: './recipes.html',   // куда компилировать
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
