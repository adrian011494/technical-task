const express = require('express');
const router = express.Router();
const { getUserInformation, getUserRepo } = require('./controllers');

router.get('/users/:username', getUserInformation);
router.get('/users/:username/repo', getUserRepo);


module.exports = router;
