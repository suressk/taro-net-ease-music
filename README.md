# <div align="center">K. Taro Music</div>

<div align="center">
    <img src="https://img.shields.io/badge/react-v17.0.0-blue">
    <img src="https://img.shields.io/badge/reactDom-v17.0.0-blue">
    <img src="https://img.shields.io/badge/@tarojs-v3.2.13-blue">
    <img src="https://img.shields.io/badge/typescript-v4.1.0-blue">
</div>

## 解决方案

1. Taro CSS Modules 方案：

    > Taro 内置了 CSS Modules <br /> 更改 `config/index.js` 中的模块化配置 `cssModules.enable => true`

    > 全局添加自定义 `sass / less` 声明的变量（并可在全局任何模块化样式文件中使用此变量）

    ```js
    const {resolve} = require('path')
    const resolvePath = dir => resolve(__dirname, '..', dir)
   
    // 安装 style-resources-loader 开发依赖包
    // config/index.js 添加如下配置
    // 小程序：
    const config = {
      mini: {
        // ... 其他配置,
        webpackChain(chain) {
          // 全局自定义变量
          chain.merge({
            module: {
              rule: {
                styleLoader: {
                  test: /\.scss$/, // .scss / .less ...
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
      // h5：
      h5: {
        // ... 其他配置,
        webpackChain(chain) {
          chain.module
            .rule('scss')
            .test(/\.scss$/) // .scss / .less ...
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
              patterns: resolvePath('src/common/styles/variables.scss')
            })
        }
      },
    }
    ```

2. 设置文件路径别名，配置 tsconfig.json： 为使 `vscode / webstorm` 编辑工具识别类似 `'@components/Login'` 的相对路径：

    ```json
    {
      "compilerOptions": {
        "paths": {
          "@/*": ["./src/*"],
          "@components": ["./src/components/*"],
          "@utils/*": ["./src/utils/*"],
          "@store/*": ["./src/store/*"],
          "@pages/*": ["./src/pages/*"],
          "@locales/*": ["./src/locales/*"]
        }
      }
    }
    ```
   
    但上面的配置只能让编辑器能够识别相对路径，Taro 编译引用并不能识别，所以 `config/index.js` 文件需要做以下配置：

    ```js
    const config = {
      // 其他配置
      alias: {
        "@": resolvePath("src"),
        "@components": resolvePath('src/components'),
        "@utils": resolvePath('src/utils'),
        "@store": resolvePath('src/store'),
        "@pages": resolvePath('src/pages'),
        "@locales": resolvePath('src/locales')
      }
    }
    ```
