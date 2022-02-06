let express = require('express');
let router = express.Router();
let HomePage = require('../controllers/Home');
let error = require('../controllers/Error');

/* GET home page. */
router.get('/',HomePage.HomeController);
router.get('*',error.Error);

module.exports = router;