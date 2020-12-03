const API = require('../services/api');

module.exports = (app, socket) => {

    app.post('/api/book', (req, res) =>{

        let state = JSON.parse(req.body.date);
        
        let startDate = new Date(state.year, state.month, state.day, state.startTime);
        let endDate = new Date(state.year, state.month, state.day, state.endTime);
        
        console.log("Start Date: "+ startDate);
        console.log("End Date: "+ endDate);

        let ret = API.checkAndSaveBooking(req.user._id, startDate, endDate).then((value) => {
           return value;
        });

            // Emitting a new message. Will be consumed by the client

        if(ret){
            socket.emit("Booked", JSON.stringify({startDate: startDate, endDate:endDate}));
            return res.send("ok");
        }

        return res.send("fail");

    });


    app.get('/api/bookings', (req,res) =>{
        API.loadBookedDates().then((value) => {
            res.send(value);
        })
    });
};