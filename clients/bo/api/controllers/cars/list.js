/**
 * Module dependencies
 */

// ...


/**
 * cars/list.js
 *
 * List cars.
 */
module.exports = async function list(req, res) {
	await Car.find().then((data) => {
		return res.view('pages/cars/list', {cars: data});
	}).catch((error) => {
		throw Error(error);
	})
};
