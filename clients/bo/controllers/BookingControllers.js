/**
 * ========== Reservation ==========
 */
const Booking = require("../models/Booking");

/**
 * Affiche la liste des reservations
 * @param {object} req
 * @param {object} res
 */
const list = (req, res) => {
	const Booking = new Booking();

	Booking.find()
		.then((result) => {
			res.render("main", { viewFile: "booking/list", bookings: result });
		})
		.catch((error) => {
			throw error;
		});
};

/**
 * Affiche le formulaire de reservation
 * @param {object} req
 * @param {object} res
 */
const create = (req, res) => {
	res.render("main", { viewFile: "booking/create" });
};

/**
 * Enregistre les informations des reservations
 * @param {object} req
 * @param {object} res
 */
const store = (req, res) => {
	const booking = new booking(req.body);

	booking
		.save()
		.then((result) => {
			res.redirect("manage/list");
		})
		.catch((error) => {
			throw error;
		});
};

const view = (req, res) => {
	res.render("main", { viewFile: "booking/view" });
};

module.exports = { list, create, store, view };
