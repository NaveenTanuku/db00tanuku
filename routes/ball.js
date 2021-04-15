var express = require('express');
const ball_controllers = require('../controllers/ball');
var router = express.Router();

/* GET home page. */
router.get('/', ball_controllers.ball_view_all_Page);

/* GET detail ball page */
router.get('/detail', ball_controlers.ball_view_one_Page);


module.exports = router;

