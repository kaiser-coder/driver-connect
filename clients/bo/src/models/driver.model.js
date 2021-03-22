const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema([{
	
}]);

const Booking = mongoose.model('Driver', BookingSchema);
module.exports = Driver;