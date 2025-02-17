const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Signup
exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber, role } = req.body;

        const user_exists = await User.findOne({ email });
        if (user_exists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPass, phoneNumber, role });

        await newUser.save();
        
        const token = jwt.sign({ user_id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User created', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



// const jwt = require('jsonwebtoken');
// const User = require('../models/user'); 
// const bcrypt = require('bcrypt');

// // Signup
// exports.signup = async (req, res) => {
//     try {
//         const { firstName, lastName, email, password, phoneNumber, role } = req.body;
        
// // Check if user already exists by email
//         const user_exists = await User.findOne({ email });
//         if (user_exists) {
//          return res.status(400).json({ message: 'User exists' });
//         }
// // Hash the password before saving
//         const hashedPass = await bcrypt.hash(password, 10);
// // Create a new user
// const newUser = new User({
//             firstName,
//             lastName,
//             email,
//             password: hashedPass,
//             phoneNumber,
//             role,
//         });

//         // Save the user to the database
//         await newUser.save();
//         const JWT_SECRET = 'secret JWT';  //note
// // Generate JWT token
// // Generate JWT token (https://www.youtube.com/watch?v=SJCVUnkmJ6k)
//         const token = jwt.sign(
//             { user_id: newUser._id },
//             JWT_SECRET,
//             { expiresIn: '1h' }
//         );
//         res.status(201).json({
//             message: 'User created',
//             token,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };


// // Login 
// exports.login = async (req, res) => {
//     try {
//     const { email, password } = req.body;
      // Find the user by email
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: 'error' });
// }
// // Compare the password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: 'error' });
// }
//       // Generate JWT token
// const token = jwt.sign(
//         { user_id: newUser._id },
//         JWT_SECRET,
//         { expiresIn: '1h' }
//     );
//     res.json({
//         message: 'Login successful',
//         token,
// });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };
