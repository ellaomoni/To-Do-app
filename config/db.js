const mongoose = require('mongoose');

// Database connection
const connectDB = (url) => {
    return mongoose.connect(url);
};

module.exports = connectDB;
