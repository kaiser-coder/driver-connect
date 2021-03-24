const layout = 'main';
const viewPath = 'partials/dashboard/';

const setViewFile = (viewFile) => {
	return viewPath + viewFile;
};

const index = (req, res) => {
	res.render(layout, { viewFile: setViewFile('dashboard') });
};

module.exports = { index };
