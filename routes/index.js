let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET home page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});
module.exports = router;
