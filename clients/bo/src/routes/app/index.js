const express = require('express');
const bookingRoute = require('./booking.route');
const config = require('../../config/config');

const router = express.Router();

const appRoutes = [
	{
		path: '/booking',
		route: bookingRoute,
	},
];

appRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
