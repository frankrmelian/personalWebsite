let express = require('express');
let router = express.Router();
let HomePage = require('../controllers/Home');
let error = require('../controllers/Error');
let RepoView = require('../controllers/Repo');

/* GET home page. */
router.get('/',HomePage.HomeController);
router.get('/api',RepoView.RepoController);
router.get('*',error.Error);

module.exports = router;