const Driver = require('../models/driver');
const Vehicle = require('../models/vehicle');

// Create a new driver
exports.createDriver = async (req, res) => {
    try {
        const driver = new Driver(req.body);
        await driver.save();
        res.status(201).json(driver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find().populate('vehicle');
        res.status(200).json(drivers);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update driver
exports.updateDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDriver = await Driver.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDriver) {
            return res.status(404).json({ message: "No driver found" });
        }
        res.status(200).json(updatedDriver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete driver
exports.deleteDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDriver = await Driver.findByIdAndDelete(id);
        if (!deletedDriver) {
            return res.status(404).json({ message: "Driver not found" });
        }
        res.status(200).json({ message: "Driver deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};





// const Driver = require('../model/driver');
// const Vehicle = require('../model/vehicle'); 


// // Create a new driver
// exports.createDriver=async(req,res)=>{
//     try {
//         const driver = new Driver(req.body);
//         await driver.save();
//         res.status(201).json(driver);
//     } 
//     catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };


// //This method was created To get all drivers
// exports.getAllDrivers = async (req, res) => {
//     try {
//         const drivers = await Driver.find().populate('vehicles');
//         res.status(200).json(drivers);
//     } 
//     catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// //This method was update an existing driver
// exports.updateDriver=async(req,res)=>{
//     try{
//         const id=req.params;
//         const updatedDriver =await Driver.findByIdAndUpdate(id,req.body);
//         if(!updatedDriver){
//             return res.status(404).json({ message: " No driver found" })
//         }
//         res.status(200).json(updatedDriver);//updated
//     }
//     catch(err)
//     {
//         res.status(400).json({ message: err.message });
//     }
// };


// //This method was delete an existing driver
// exports.deleteDriver = async (req, res) => {
//     try {
//         const  id  = req.params; 
//         const deletedDriver = await Driver.findByIdAndDelete(id); 
//         if (!deletedDriver) {
//             return res.status(404).json({ message: "Driver not found" });
//         }
//         res.status(200).json({ message: "Driver deleted successfully" });
//     } catch (err)
//     {
//         res.status(400).json({ message: err.message });
//     }
// };

