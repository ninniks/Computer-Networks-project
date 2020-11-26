const API = require('../services/api');

module.exports = app => {
    app.post('/api/book', (req, res) =>{
    
        let startDate = new Date(req.body.date.year, req.body.date.month, req.body.date.day, req.body.date.time[0]);
        let endDate = new Date(req.body.date.year, req.body.date.month, req.body.date.day, req.body.date.time[1]);
        
        console.log("Start Date: "+ startDate);
        console.log("End Date: " +endDate);

        let ret = API.checkAndSaveBooking(req.user._id, startDate, endDate).then((value) => {
           return value;
        });

        if(ret)
            return res.send("ok");

        return res.send("fail");

    });
};