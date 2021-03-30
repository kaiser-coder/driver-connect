/**
 * Module dependencies
 */

const Car = require('../../models/Car');

// ...


/**
 * cars/store.js
 *
 * Store cars.
 */
module.exports = async function store(req, res) {

	Car.validate('vin', req.body.vin);

	/* await Car.create(req.body).then((data) => {
		return res.redirect('/cars/list');
	}).catch((error) => {
		sails.log.debug(error.message);
		return res.redirect('/cars/create');
	}) */
};
