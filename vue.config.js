module.exports = {
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: function (path) { return path.replace('/api', '/') },
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
};
