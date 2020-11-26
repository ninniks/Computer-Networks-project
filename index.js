require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


require('./models/User');
require('./models/Booking');
require('./services/passport');


const url = "mongodb+srv://admin:"+process.env.MONGO_PASSWORD+"@cluster0.ayla2.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

//using cookie session 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);

//inizialize passport for cookies
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) =>{
    res.send('<a href="/auth/google">Sign In with Google</a>');
});

require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(8000);