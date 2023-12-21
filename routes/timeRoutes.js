const express = require('express');
const router = express.Router();
const { unixTime} = require('../controllers/timeController');

router.get("/:date?", unixTime);

module.exports = router;