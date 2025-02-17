const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};



// const jwt = require("jsonwebtoken");
// const env = require("../config/env");

// exports.authenticate = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

//     try {
//         const decoded = jwt.verify(token.replace("Bearer ", ""), env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(403).json({ message: "Invalid token" });
//     }
// };