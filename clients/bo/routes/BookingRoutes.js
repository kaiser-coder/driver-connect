const route  = require('express').Router();
const {create, store} = require('../controllers/BookingControllers');

route.get('/booking/create', create);
route.post('/booking/store', store);
route.get('/booking/manage/list', list);

module.exports = route;