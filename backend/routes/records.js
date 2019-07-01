var express = require('express');
var router = express.Router();
const { createRecord, searchMovies, getDetailMovie } = require('../controllers/record')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource records');
});

router.get('/:id', getDetailMovie)
router.post('/search', searchMovies)
router.post('/', createRecord)

module.exports = router;
