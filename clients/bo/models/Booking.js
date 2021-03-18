const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema([{
	_idClient: {
		type: 'string',
		required: 'true'
	},
	ville_depart: {
		type: 'string',
		required: true
	},
	ville_arrivee: {
		type: 'string',
		required: true
	},
	autres_options: {
		type: 'object',
		required: true
	},
	date_depart: {
		type: 'date',
		required: true
	},
	vehicule: {
		type: 'string',
		required: true
	},
	mode_paiement: {
		type: 'string',
		required: true
	},
	prix: {
		type: 'string',
		required: 'true'
	}
}]);

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;