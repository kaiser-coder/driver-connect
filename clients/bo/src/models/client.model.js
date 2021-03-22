const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema([{
	_idClient: {
		type: 'string',
		required: 'true'
	}
}]);

const Booking = mongoose.model('Client', BookingSchema);
module.exports = Client;