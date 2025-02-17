const Vehicle = require('../models/vehicle');  
const Driver = require('../models/driver');    

// Create a new vehicle
exports.createVehicle = async (req, res) => {
    try {
        const { name, operationalID, serviceType, make, model, makeYear, category, plateNumber, color, features, licenseExpiry, daysUntilInspectionExpiry, licenseStatus, numberOfSeats, available, driver } = req.body;
        
        const vehicle = new Vehicle({
            name,
            operationalID,
            serviceType,
            make,
            model,
            makeYear,
            category,
            plateNumber,
            color,
            features,
            licenseExpiry,
            daysUntilInspectionExpiry,
            licenseStatus,
            numberOfSeats,
            available,
            driver
        });

        await vehicle.save();
        res.status(201).json({ message: 'Vehicle created successfully', vehicle });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating vehicle' });
    }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('driver', 'name _id'); // Populate driver details-->  Fetch vehicles with associated drivers.
        res.status(200).json(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
};

// Get a single vehicle by ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).populate('driver', 'name _id');
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching vehicle' });
    }
};

// Update a vehicle by ID
exports.updateVehicle = async (req, res) => {
    try {
        const { name, operationalID, serviceType, make, model, makeYear, category, plateNumber, color, features, licenseExpiry, daysUntilInspectionExpiry, licenseStatus, numberOfSeats, available, driver } = req.body;

        const vehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            {
                name,
                operationalID,
                serviceType,
                make,
                model,
                makeYear,
                category,
                plateNumber,
                color,
                features,
                licenseExpiry,
                daysUntilInspectionExpiry,
                licenseStatus,
                numberOfSeats,
                available,
                driver
            },
            { new: true }
        );

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle updated successfully', vehicle });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating vehicle' });
    }
};

// Delete a vehicle by ID
exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting vehicle' });
    }
};