const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `https://api.nexon.co.kr`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
  app.use(
    createProxyMiddleware("/MetaData", {
      target: `https://static.api.nexon.co.kr`,
      changeOrigin: true,
      pathRewrite: {
        "^/MetaData": "",
      },
    })
  );
};
