var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user.controller');


router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_by_id);
router.post('/', user_controller.create_user);
router.delete('/:id', user_controller.delete_user);

module.exports = router;
