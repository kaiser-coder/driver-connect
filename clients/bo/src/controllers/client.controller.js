const layout = 'main';
const viewPath = 'partials/clients/';

const setViewFile = (viewFile) => {
	return viewPath + viewFile;
};

const list = (req, res) => {
	res.render(layout, { viewFile: setViewFile('list') });
};

const feedback = (req, res) => {
	res.render(layout, { viewFile: setViewFile('feedback') });
};

const create = (req, res) => {
	res.send("Formulaire d'ajout client");
};

const store = (req, res) => {
	res.send('Enregistrement');
};

module.exports = { list, create, store, feedback };
