/**
 * Module dependencies
 */

/**
 * cars/lock.js
 *
 * Lock cars.
 */
module.exports = async function lock(req, res) {
	await Car.findOne({ id: req.params.id })
		.then((data) => {
			let locked = data.locked;

			if (locked == true) {
				return Car.updateOne({ id: req.params.id }).set({
					locked: false,
				});
			}

			if (locked == false) {
				return Car.updateOne({ id: req.params.id }).set({
					locked: true,
				});
			}
		})
		.then((data) => {
			return res.redirect('/cars/list');
		})
		.catch((error) => {
			throw Error(error);
		});

};
