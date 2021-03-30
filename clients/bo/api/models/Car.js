/**
 * Car.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		vin         : {type: 'string', required   : true},
		seats       : {type: 'number', required   : true},
		manufacturer: {type: 'string', required   : true},
		model       : {type: 'string', required   : true},
		type        : {type: 'string', required   : true},
		fuel        : {type: 'string', required   : true},
		color       : {type: 'string', required   : true},
		locked      : {type: 'boolean', defaultsTo: true},
		createdAt   : false,
		updatedAt   : false,

  },

};

