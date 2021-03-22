// const template = '../../views/';
// const partials = template + '/partials/';

const create = (req, res) => {
	res.render('main', { viewFile: 'partials/booking/create' });
};

module.exports = { create };
