const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');
const { authenticate } = require("../middleware/auth.middleware");

router.get('/:id', authenticate, userCtrl.getUser);
router.put('/:id', authenticate, userCtrl.updateUser);
router.delete('/:id', authenticate, userCtrl.deleteUser);

module.exports = router;


