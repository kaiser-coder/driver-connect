const express = require("express");
const app = express();

const BookingRoutes = require("./routes/BookingRoutes");
const ClientRoutes = require("./routes/ClientRoutes");

/**
 * ========== Middlewares ==========
 */
app.use("/public", express.static("./public"));

/**
 * ========== Configs ==========
 */
app.set("view engine", "ejs");

/**
 * ========== Routes ==========
 */
app.use(BookingRoutes); // Reservations
app.use(ClientRoutes); // Clients

/**
 * ========== Lancement du serveur au port 3000 ==========
 */
app.listen("3000", (_) => {
	console.log("Listening on port 3000");
});
