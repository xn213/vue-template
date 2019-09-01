const path = require('path')

// 开发环境代理 工程化
const proxyConfig = {
  target: 'url1', // 小明业务接口
  // target: 'url2', // 小李业务接口
  // target: 'test测试环境 url', // 新系统测试环境
  // target: 'boe测试环境 url', // 新系统boe测试环境
  // target: '生产环境 url', // 新系统生产环境
}

// 路径处理
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // 配置开发 or 产品 路径
  // publicPath: '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/项目名' : '/',
  // 根据自己习惯需求配置webpack
  configureWebpack: {
    resolve: {
      extensions: ['js', 'vue', 'json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        const: resolve('src/const'),
        utils: resolve('src/utils'),
        api: resolve('src/api'),
        components: resolve('src/components'),
        pages: resolve('src/pages'),
        // store: resolve('src/store'),
        // mixins: resolve('src/mixins'),
        // plugins: resolve('src/plugins'),
        // ROUTER: resolve('src/ROUTER'),
        // service: resolve('src/service')
      }
    },
    devServer: {
      proxy: {
        // proxy api request to dev box
        '/api': {
          changeOrigin: true,
          ...proxyConfig,
          // pathRewrite: {
          //   '^/api': '/'
          // }
        },
        '/(业务)/api': {
          target: '业务接口 url',
          changeOrigin: true,
          headers: {
            origin: 'xn-test.xn213.net',
          },
        },
      }
    },
  },
  // css: {
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     less: {
  //       loader: 'less-loader',
  //       options: { javascriptEnabled: true },
  //     },
  //   },
  // },
  chainWebpack: config => {
    // vue 官网示例
    // config.module
    // .rule('vue')
    // .use('vue-loader')
    // .loader('vue-loader')
    // .tap(options => {
      //   // 修改他的选项...
      //   return options
      // })
    // //个人理解
    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //     .loader('url-loader')
    //     .tap(options => {
      //       // 比方说限制图片大小
      //       options.limit = 4096 // 待验证
      //       return options
      //     })
    config.plugins.delete('prefetch')
  }
}