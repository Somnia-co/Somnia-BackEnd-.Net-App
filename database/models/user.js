const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    pwHash: String,
    email: String,
    regDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    newsletter: Boolean,
    defShippingAddress: String,
    defBillingAddress: String
});

const User = mongoose.model('User',userSchema);

module.exports =  User;