const layout = 'main';
const viewPath = 'partials/booking/';

const setViewFile = (viewFile) => {
	return viewPath + viewFile;
};

const list = (req, res) => {
	res.render(layout, { viewFile: setViewFile('list') });
};

const create = (req, res) => {
	let step = req.params.step;

	switch (step) {
		case 'step1':
			viewFile = 'create';
			break;

		case 'step2':
			viewFile = 'carList';
			break;

		case 'step3':
			viewFile = 'recap';
			break;

		case 'step4':
			viewFile = 'payment';
			break;

		default:
			viewFile = 'create';
			break;
	}

	res.render(layout, { viewFile: setViewFile(viewFile) });
};

const view = (req, res) => {
	res.send('View');
};

const store = (req, res) => {};

module.exports = { create, view, store, list };
