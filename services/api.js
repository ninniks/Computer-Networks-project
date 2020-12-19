const mongoose = require('mongoose');
const Booking = mongoose.model('bookings');
const _ = require('lodash');

module.exports.checkAndSaveBooking = async (userID, date) => {
    console.log('test', date);
    //API call to MongoDB to check if there's a booking with this dates
    const existingBooking = await Booking.findOne({ date });
    

    if(existingBooking){
        return false;
    }
    
    const booking = await new Booking({ date, userID }).save();
    return true;

};

module.exports.loadBookedDates = async () => {
    const bookedDates = await Booking.find();

    return bookedDates;
}


module.exports.loadBookedHours = async (date) => {
    const dates = await Booking.find({ date });
    let hours =_.map(dates, (data) => {
        return {start: data.startHour, end: data.endHour}
    });

    return hours;
}

module.exports.loadAllUserBookings = async (userid) => {
    const bookings = await Booking.find({userID: userid});

    return bookings;
}