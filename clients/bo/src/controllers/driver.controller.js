const layout = 'main';
const viewPath = 'partials/drivers/';

const setViewFile = (viewFile) => {
	return viewPath + viewFile;
};

const list = (req, res) => {
	res.render(layout, { viewFile: setViewFile('list') });
};

const create = (req, res) => {
	res.send("Formulaire d'ajout de chauffeur");
};

const store = (req, res) => {
	res.send('Enregistrement');
};

module.exports = { list, create, store };
