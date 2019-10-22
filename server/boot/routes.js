
const path = require('path')
module.exports = function (app) {
  // Install a "/ping" route that returns "pong"
  app.get('/', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/indexPage.ejs'))
  })
  app.get('/product-detail', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/productDetail.ejs'))
  })
  app.get('/wishlist', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/wishlist.ejs'))
  })
  app.get('/login-register', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/login-register.ejs'))
  })
  app.get('/contact', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/contact.ejs'))
  })
  app.get('/checkout', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/checkout.ejs'))
  })
  app.get('/product-category', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/productCategory.ejs'))
  })
  app.get('/my-account', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/my-account.ejs'))
  })
  app.get('/about-us', function (req, res) {
    res.render(path.join(__dirname, '/client/pages/aboutUs.ejs'))
  })
}
