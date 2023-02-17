const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    "vuetify",
    "@jsonforms/core",
    "@jsonforms/vue2",
    "@jsonforms/vue2-vuetify",
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/json-forms-demo/" : "/",
});
