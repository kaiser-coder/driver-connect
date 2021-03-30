/**
 * Module dependencies
 */
require('@sailshq/lodash');

/**
 * bookings/store.js
 *
 * Store bookings.
 */
module.exports = async function store(req, res) {
	let car = await Car.findOne().then((data) => {
		return data;
	});

	let client = await Client.findOne().then((data) => {
		return data;
	});

	let cost = [{
		price: '',
		final: '',
	}];



	await Booking.create().then((data) => {
		return res.redirect('bookings/register');
	}).then((error) => {
		throw Error(error);
	})
};
