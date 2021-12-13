const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    pwHash: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    newsletter: {
        type: Boolean,
        required: true,
        default: false
    },
    defShippingAddress: {
        type: String,
        required: false
    },
    defBillingAddress: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User',userSchema);
module.exports =  User;