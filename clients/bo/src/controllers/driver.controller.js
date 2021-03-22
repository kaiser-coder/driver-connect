/**
 * ========== Chauffeurs ==========
 */

const Driver = require('../models/Driver');

const list = (req, res) => {
	res.send('Liste des chauffeurs');
};

const create = (req, res) => {
	res.send('Formulaire d\'ajout de chauffeur');
} 

const store = (req, res) => {
	res.send('Enregistrement');
}

module.exports = {list, create, store};