const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("apis", resolve("src/apis"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("config", resolve("src/config"))
      .set("stores", resolve("src/stores"))
      .set("untils", resolve("src/untils"))
      .set("views", resolve("src/views"));
  },
  devServer: {
    proxy: {
      "/abc": {
        target: "http://www.***.com/",
        changeOrigin: true,
      },
    },
  },
};
