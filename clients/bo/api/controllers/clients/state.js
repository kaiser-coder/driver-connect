/**
 * Module dependencies
 */

// ...


/**
 * clients/state.js
 *
 * State clients.
 */
module.exports = async function state(req, res) {
	await Client.findOne({ id: req.params.id }).then(data => {
		let state = data.state;

		if(state == 'active') {
			return Client.updateOne({ id: req.params.id })
			.set({
				state: 'inactive',
			})

		}

		if(state == 'inactive') {
			return Client.updateOne({ id: req.params.id })
			.set({
				state: 'active',
			})
		}
	}).then((data) => {
		return res.redirect('/clients/list');
	}).catch((error) => {
		throw Error(error);
	});

};
