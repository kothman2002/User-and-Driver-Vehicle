const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mongo_test",
    JWT_SECRET: process.env.JWT_SECRET || "yourSuperSecretKey",
    NODE_ENV: process.env.NODE_ENV || "development"
};