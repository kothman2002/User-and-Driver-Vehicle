const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    operationalID: { type: String, unique: true, required: true },
    serviceType: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    makeYear: { type: Number },
    category: { type: String, required: true },
    plateNumber: { type: String, unique: true, required: true },
    color: { type: String },
    features: { type: [String] },
    licenseExpiry: { type: Date },
    daysUntilInspectionExpiry: { type: Number },
    licenseStatus: { type: String, enum: ['valid', 'expired'], required: true },
    numberOfSeats: { type: Number },
    available: { type: Boolean,},
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }  // one to one relationship

});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;