module.exports = {
  '/api': {
    target: 'http://localhost:8081',
    pathRewrite: { '^/api': '/api' },
    changeOrigin: true
  }
}

