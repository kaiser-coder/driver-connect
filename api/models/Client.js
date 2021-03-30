/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		firstName: { type: "string", required: true },
		lastName: { type: "string", required: true },
		email: { type: "string" },
		phoneNumber: { type: "string", required: true },
		address: { type: "string", required: true },
		state: { type: "string", defaultsTo: "active" },
	},
};
