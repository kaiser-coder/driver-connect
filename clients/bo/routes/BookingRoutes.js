const route = require("express").Router();
const {
	create,
	store,
	list,
	view,
} = require("../controllers/BookingControllers");

route.get("/booking/create", create);
route.post("/booking/store", store);
route.get("/booking/view", view);
route.get("/booking/manage/list", list);

module.exports = route;
