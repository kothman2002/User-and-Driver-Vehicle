const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');

// new driver 
router.post('/',driverController.createDriver);
// all drivers
router.get('/', driverController.getAllDrivers);
// update driver
router.put('/:id',driverController.updateDriver);
// delete driver
router.delete('/:id',driverController.deleteDriver); 
module.exports = router;

