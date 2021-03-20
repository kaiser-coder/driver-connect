const route  = require('express').Router();
const {list, create, store} = require('../controllers/BookingControllers');

route.get('/clients/create', create);
route.post('/clients/store', store);
route.get('/clients/manage/list', list);

module.exports = route;