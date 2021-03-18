/**
 * ========== Reservation ==========
 */
const Booking = require('../models/Booking');

/**
 * Affiche la liste des reservations
 * @param {object} req 
 * @param {object} res 
 */
const list = (req, res) => {
	res.send('Liste des reservations')
}

/**
 * Affiche le formulaire de reservation
 * @param {object} req 
 * @param {object} res 
 */
const create = (req, res) => {
	res.send('Formulaire de reservations')
}

/**
 * Enregistre les informations des reservations
 * @param {object} req 
 * @param {object} res 
 */
const store = (req, res) => {
	res.send('Enregistrement des reservations')
}

module.exports = {list, create, store};