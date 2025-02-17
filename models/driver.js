const mongoose = require('mongoose');
const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    employeeId: { type: String, unique: true, required: true },
    profileImage: { type: String },
    birthday:{ type: Date},
    status:{ type: String, enum: ['active', 'inactive']},
    licenseNumber:{type: String,},
    licenseImage:{type: String },
    licenseStatus:{ type: String, enum: ['valid', 'expired']},
    licenseExpiry:{ type: Date },
    nationality:{ type: String },
    languages:{ type: [String] },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, //relationship between two collections
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;