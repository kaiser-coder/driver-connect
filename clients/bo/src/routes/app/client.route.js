const express = require('express');
const { list, feedback } = require('../../controllers/client.controller');

const router = express.Router();

router.route('/list').get(list);
router.route('/feedback').get(feedback);

module.exports = router;
