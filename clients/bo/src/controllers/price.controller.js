const layout = 'main';
const viewPath = 'partials/prices/';

const setViewFile = (viewFile) => {
	return viewPath + viewFile;
};

const list = (req, res) => {
	res.render(layout, { viewFile: setViewFile('list') });
};

const defaultList = (req, res) => {
	res.render(layout, { viewFile: setViewFile('listDefault') });
};

module.exports = { list, defaultList };
