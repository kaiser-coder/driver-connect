/**
 * Booking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		departure : { type: 'string', required: true },
		arrival   : { type: 'string', required: true },
		options   : { type: 'json', required  : false },
		car       : { type: 'string', required: true},
		client    : {type : 'string', required  : true},
		cost      : {type : 'json', required  : true},
		payment_id: {type : 'string', required: true}
  },

};

