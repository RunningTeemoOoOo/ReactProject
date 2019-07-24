const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/store', {
    target: 'https://music.163.com',
    changeOrigin: true
  }))
}