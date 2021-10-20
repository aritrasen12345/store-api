const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        //UseCreateIndex: true,
        //UseFindAndModify: false,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;