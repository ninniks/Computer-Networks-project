const API = require('../services/api');

module.exports = (app, socket) => {

    app.post('/api/book', (req, res) =>{

        let state = JSON.parse(req.body.date);
        console.log('Post Date',state);
        
       let ret = API.checkAndSaveBooking(req.user._id, state).then((value) => {
           return value;
        });

        if(ret){
            socket.emit("Booked", JSON.stringify({ state }));
            return res.send("ok");
        }

        return res.send("fail");

    });


    app.get('/api/bookings', (req,res) =>{
        API.loadBookedDates().then((value) => {
            res.send(value);
        })
    });

    app.get('/api/bookedhours/:date', (req, res) =>{
        let date = req.params.date;
        API.loadBookedHours(date).then((value) =>{
            res.send(value);
        });
    })

    app.get('/api/mybookings', (req,res) =>{
        console.log(req.user._id);
        API.loadAllUserBookings(req.user._id).then((value) => {
            res.send(value);
        });
    })
};