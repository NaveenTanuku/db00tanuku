var express = require('express');
const ball_controllers = require('../controllers/ball');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET home page. */
router.get('/', ball_controllers.ball_view_all_Page);

/* GET detail ball page */
router.get('/detail', ball_controllers.ball_view_one_Page);

/* GET create ball page */
router.get('/create', secured, ball_controllers.ball_create_Page);

/* GET create update page */
router.get('/update', secured, ball_controllers.ball_update_Page);

/* GET create delete page */
router.get('/delete', secured, ball_controllers.ball_delete_Page);


module.exports = router;

