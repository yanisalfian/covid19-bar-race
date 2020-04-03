module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/covid19-bar-race/" : "/",
  transpileDependencies: ["vuetify"]
};
