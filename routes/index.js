let express = require('express');
let router = express.Router();

const cowsay = require('cowsay');
console.log(cowsay.say({text: 'Le routeur est bien créé !'}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
