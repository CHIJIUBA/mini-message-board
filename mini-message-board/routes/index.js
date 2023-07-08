const express = require('express');
const router = express.Router();

//some sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Mini Messageboard", messages});
});


router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let userName = req.body.user;
  let userMessage =  req.body.message;
  messages.push({text: userMessage, user: userName, added: new Date()});
  res.redirect('/')
});


module.exports = router;
