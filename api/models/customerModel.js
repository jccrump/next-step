const mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    street_address: String,
    city: String,
    zip: String,
    company_name: String,
    phone: String,
    email: String
}, {collection: 'customers'})

let customerModel = mongoose.model('customers', customerSchema);

module.exports = customerModel
