const express = require('express');
const bookingRoute = require('./booking.route');
const dashboardRoute = require('./dashboard.route');
const clientRoute = require('./client.route');
const driverRoute = require('./driver.route');
const priceRoute = require('./price.route');
const config = require('../../config/config');

const router = express.Router();

const appRoutes = [
	{
		path: '/dashboard',
		route: dashboardRoute,
	},
	{
		path: '/booking',
		route: bookingRoute,
	},
	{
		path: '/client',
		route: clientRoute,
	},
	{
		path: '/driver',
		route: driverRoute,
	},
	{
		path: '/price',
		route: priceRoute,
	},
];

appRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
