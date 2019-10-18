
const path = require('path')
module.exports = function (app) {
  // Install a "/ping" route that returns "pong"
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/indexPage.html'))
  })
  app.get('/product-detail', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/productDetail.html'))
  })
  app.get('/wishlist', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/wishlist.html'))
  })
  app.get('/login-register', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/login-register.html'))
  })
  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/contact.html'))
  })
  app.get('/checkout', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/checkout.html'))
  })
  app.get('/product-category', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/productCategory.html'))
  })
  app.get('/my-account', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/my-account.html'))
  })
  app.get('/about-us', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/pages/aboutUs.html'))
  })
}
