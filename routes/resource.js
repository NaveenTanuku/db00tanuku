var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ball_controller = require('../controllers/ball');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/balls', ball_controller.ball_create_post);
// DELETE request to delete ball.
router.delete('/balls/:id', ball_controller.ball_delete);
// PUT request to update ball.
router.put('/balls/:id', ball_controller.ball_update_put);
// GET request for one ball.
router.get('/balls/:id', ball_controller.ball_detail);
// GET request for list of all ball items.
router.get('/balls', ball_controller.ball_list);
module.exports = router;