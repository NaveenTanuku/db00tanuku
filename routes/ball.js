var express = require('express');
const ball_controllers = require('../controllers/ball');
var router = express.Router();

/* GET home page. */
router.get('/', ball_controllers.ball_view_all_Page);

/* GET detail ball page */
router.get('/detail', ball_controllers.ball_view_one_Page);

/* GET create ball page */
router.get('/create', ball_controllers.ball_create_Page);

/* GET create update page */
router.get('/update', ball_controllers.ball_update_Page);

module.exports = router;

