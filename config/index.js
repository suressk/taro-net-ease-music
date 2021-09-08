// eslint-disable-next-line import/no-commonjs
const {resolve} = require('path')

const resolvePath = dir => {
  return resolve(__dirname, '..', dir)
}

const config = {
  projectName: 'taro-start-app',
  date: '2021-7-4',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    "@": resolvePath("src"),
    "@components": resolvePath('src/components'),
    "@utils": resolvePath('src/utils'),
    "@store": resolvePath('src/store'),
    "@pages": resolvePath('src/pages'),
    "@locales": resolvePath('src/locales')
  },
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      // 全局自定义变量
      chain.merge({
        module: {
          rule: {
            styleLoader: {
              test: /\.scss$/,
              use: [
                {
                  loader: 'style-resources-loader',
                  options: {
                    patterns: [
                      resolvePath('src/common/styles/variables.scss')
                    ]
                  }
                }
              ]
            }
          }
        }
      })
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.module
        .rule('scss')
        .test(/\.scss$/)
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: resolvePath('src/common/styles/variables.scss')
        })
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
