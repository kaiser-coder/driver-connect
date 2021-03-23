const express = require('express');
const { create, view, store, list } = require('../../controllers/booking.controller');

const router = express.Router();

router.route('/create/:step').get(create);
router.route('/list').get(list);
router.route('/view').get(view);

module.exports = router;
