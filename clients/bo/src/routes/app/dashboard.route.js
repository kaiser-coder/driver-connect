const express = require('express');
const { index } = require('../../controllers/dashboard.controller');

const router = express.Router();

router.route('/index').get(index);

module.exports = router;
