const mongoose = require('mongoose');

let vendorSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    company_name: String,
    trade: String,
    street_address: String,
    city: String,
    zip: String,
    payment_type: String,
    username: String,
    password: String
}, {collection: 'vendors'})

let vendorModel = mongoose.model('vendors', vendorSchema);

module.exports = vendorModel
