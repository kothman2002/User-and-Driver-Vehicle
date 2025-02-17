const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //user fields
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    role: { type: String, enum: ['admin', 'driver', 'manager'] },
    address: { street: String, city: String, state: String, zipCode: String, country: String },
    profileImage: String,
    status: { type: String, enum: ['active', 'suspended', 'deleted'] },
    preferences: Object,
    lastLogin: Date
});
 //used to interact with the data in the database
const User = mongoose.model('User', userSchema);
module.exports = User;


// const mongoose = require('mongoose');

// const user_Schema=new mongoose.Schema({
//   //user fields
//   firstName:String,
//   lastName:String,
//   phoneNumber:{type:String,unique:true},
//   role: { type: String, enum: ['admin', 'driver', 'manager']},
//   address: {street: String,city: String,state: String,zipCode: String,country: String},
//   profileImage:String,
//   status:{ type: String, enum:['active', 'suspended', 'deleted']},
//   preferences:Object,
//   lastLogin:Date, 
// });
 //used to interact with the data in the database
// const User = mongoose.model('User', user_Schema);
// module.exports = User;
