/**
 * Module dependencies
 */

// ...


/**
 * bookings/register.js
 *
 * Register bookings.
 */
module.exports = async function register(req, res) {
	let step = req.params.step;

	if(step == undefined) step = 'step1';
	return res.view('pages/orders/register', { step: step });
};
