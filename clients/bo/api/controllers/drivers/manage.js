/**
 * Module dependencies
 */

// ...

/**
 * drivers/manage.js
 *
 * Manage drivers.
 */
module.exports = async function manage(req, res) {
  let drivers = await Driver.find().then((data) => {return data;});
  let groups = await GroupDriver.find().then((data) => {return data;});

  return res.view('pages/personnels/drivers', { drivers: drivers, groups: groups });
};
