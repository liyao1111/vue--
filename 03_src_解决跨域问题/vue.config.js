const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,/*关闭语法检查*/
  // 开启代理服务器（方式一）
  // devServer:{
  //   proxy:'http://localhost:500/'
  // },
  // 开启代理服务器（方式一）
  devServer: {
    proxy: {
      '/student': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/student':''},
        ws: true,//支持websocket
        changeOrigin: true
      }, 
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws:true,
        changeOrigin:true,

      }
    }
  }
})
