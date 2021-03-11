module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/leafandberrystudio.github.io'
  : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}