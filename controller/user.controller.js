const User = require('../models/user'); 
//create 
exports.createUser = async (req, res) => {
try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
    } catch (error) {
    res.status(500).json({ message: 'Error create user', error });
    }
};

//retrieve
exports.getUser = async (req, res) => {
try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
    } catch (error) {
    res.status(500).json({ message: 'Error retrieve user', error });
    }
};

//update
exports.updateUser = async (req, res) => {
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
    } catch (error) {
    res.status(500).json({ message: 'Error update user', error });
    }
};

//delete 
exports.deleteUser = async (req, res) => {
try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
    } catch (error) {
    res.status(500).json({ message: 'Error delete user', error });
    }
};