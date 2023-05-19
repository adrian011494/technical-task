const express = require('express');
const router = express.Router();
const { getUserInformation } = require('./controllers');

router.get('/users/:username', getUserInformation);

module.exports = router;
