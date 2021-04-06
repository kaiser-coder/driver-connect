/**
 * Driver.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {type: 'string', required: true},
    lastName: {type: 'string', required: true},
    address: {type: 'string', required: true},
    phoneNumber: {type: 'string', required: true},
	 state: {type: 'boolean', defaultsTo: true},
	 groupID: {type: 'string', defaultsTo: 'no group'}
  },

};

