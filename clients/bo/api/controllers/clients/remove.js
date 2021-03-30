/**
 * Module dependencies
 */

// ...


/**
 * clients/remove.js
 *
 * Remove clients.
 */
module.exports = async function remove(req, res) {
	await Client.destroyOne({id: req.params.id})
	.then((data) => {
		return res.redirect(200, '/clients/list');
	}).catch((error) => {
		return res.end(error);
	})
};
