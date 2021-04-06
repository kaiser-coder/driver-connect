/**
 * Module dependencies
 */

// ...

/**
 * bookings/register.js
 *
 * Register bookings.
 */
module.exports = async function register(req, res) {
  let cars = await Car.find().then((data) => {
    return data;
  });
  return res.view('pages/orders/register', { cars: cars });
};
