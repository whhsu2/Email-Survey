// create model class using mongoose to create a handle for Mongodb collection 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    respond: { type: Boolean, default: false}
})

module.exports = recipientSchema;