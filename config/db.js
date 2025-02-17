//MongoDB connection setup
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const uri='mongodb://localhost:27017/mongo_test'
// These options tell Mongoose how to handle certain behaviors and internal mechanisms related to MongoDB.
//connect mongodb now
const connectDB = async () => {
    try 
    {
        await mongoose.connect(process.env.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    console.log("Connected to MongoDB");
    } 
    catch (err) 
    {
    console.log("Connection error", err);
    }
    };

    connectDB();
    module.exports=connectDB;