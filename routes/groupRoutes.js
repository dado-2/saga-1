const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/', groupController.getGroups);
router.post('/select', groupController.selectGroup);

module.exports = router;