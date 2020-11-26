const mongoose = require('mongoose');
const Booking = mongoose.model('bookings');

module.exports.checkAndSaveBooking = async (userid, startDate, endDate) => {

    //API call to MongoDB to check if there's a booking with this dates
    const existingBooking = await Booking.findOne({startTime: startDate, endTime: endDate });
    console.log("ExistingBooking: "+existingBooking+"\n");

    if(existingBooking){
        return false;
    }
    
    // if not saving new booking record
    const booking = await new Booking({userID: userid, startTime:startDate, endTime:endDate }).save();
    console.log("Saved new booking");
    return true;

};