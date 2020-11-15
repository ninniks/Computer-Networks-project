const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating user Schema with Mongoose driver 
const userSchema = new Schema({
    googleID: String
});

mongoose.model('users', userSchema);