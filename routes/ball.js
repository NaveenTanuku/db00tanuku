var express = require('express');
const ball_controllers = require('../controllers/ball');
var router = express.Router();

/* GET home page. */
router.get('/', ball_controllers.ball_view_all_Page);

module.exports = router;

