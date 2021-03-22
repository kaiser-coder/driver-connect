const express = require('express');
const bookingController = require('../../controllers/booking.controller');

const router = express.Router();

router.route('/create').get(bookingController.create);

module.exports = router;
