const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating user Schema with Mongoose driver 
const bookingSchema = new Schema({
    userID: String,
    startTime: Date,
    endTime: Date,

});

mongoose.model('bookings', bookingSchema);