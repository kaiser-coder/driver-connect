/**
 * Module dependencies
 */

/**
 * clients/list.js
 *
 * List clients.
 */
module.exports = async function list(req, res) {
	await Client.find()
		.then((data) => {
			return res.view('pages/personnels/clients', {clients: data});
		})
		.catch((error) => {
			return res.send(error);
		});
};
