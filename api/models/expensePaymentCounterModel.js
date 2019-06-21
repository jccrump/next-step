const mongoose = require('mongoose');

let paymentCounterSchema = mongoose.Schema({
    type: String,
    count: Number
}, {collection: 'counters'})

let paymentCounterModel = mongoose.model('counters', paymentCounterSchema);

module.exports = paymentCounterModel
