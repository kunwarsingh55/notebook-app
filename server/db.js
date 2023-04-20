const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://kunwarsingh:qwertyuiop@cluster0.emgrmkk.mongodb.net/?retryWrites=true&w=majority')
        .then(console.log("connected"));
}



module.exports = connectDB;