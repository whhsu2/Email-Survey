// create model class using mongoose to create a handle for Mongodb collection 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

mongoose.model('users', userSchema)