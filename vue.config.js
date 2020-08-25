module.exports = {
      devServer: {
            //publicPath: '/fakeubi',
            proxy: {
                  '/api': {
                        target: 'http://127.0.0.1:8080/FakeUBI',
                        // 允许跨域
                        changeOrigin: true,
                        ws: true,
                        pathRewrite: {
                              '^/api': ''
                        }
                  }
            }
      }
}