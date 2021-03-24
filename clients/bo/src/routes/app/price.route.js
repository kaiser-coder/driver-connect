const express = require('express');
const { list, defaultList } = require('../../controllers/price.controller');
const { list: destinationList } = require('../../controllers/destination.controller');

const router = express.Router();

router.route('/list').get(list);
router.route('/default').get(defaultList);
router.route('/destination').get(destinationList);

module.exports = router;
