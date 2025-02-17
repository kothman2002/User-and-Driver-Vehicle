//mongodb://localhost:27017/
const express = require('express');
const connectDB = require('./config/db'); 
const authRoutes = require('./route/auth.route');
const userRoutes = require('./route/user.route');
const driverRoutes = require('./route/driver.route');
const vehicleRoutes = require('./route/vehicle.route');
const dotenv = require("dotenv");
const env = require("./config/env");
const { errorHandler } = require("./middleware/error.middleware");


const app = express();



dotenv.config(); 
connectDB();
app.use(express.json());

// connection
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use(errorHandler); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server start`));
