const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/shopping-website/" : "/",
  // publicPath: "./",
  lintOnSave: false,
  devServer: {
    host: "localhost",

    port: "8080",
    
    https: false,

    proxy: {
      "/api": {
        target: " http://39.98.123.211",
        // target: "http://39.98.123.211",
        //  http://h_1029.gitee.io/shopping-website
        // pathRewrite: { "^/api": "" },
      },
    },
  },
});

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     host: "localhost",

//     port: "8080",

//     https: false,
//     proxy: {
//       "/api": {
//         target: "  http://39.98.123.211", // pathRewrite: { "^/api": "" },
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": "/",
//         },
//       },
//     },
//   },
// });
