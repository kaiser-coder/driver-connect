/**
 * ========== Client ==========
 */

const Client = require('../models/Client');

const list = (req, res) => {
	res.send('Liste des clients');
};

const create = (req, res) => {
	res.send('Formulaire d\'ajout client');
} 

const store = (req, res) => {
	res.send('Enregistrement');
}

module.exports = {list, create, store};