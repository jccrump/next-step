const mongoose = require('mongoose');

let expenseSchema = mongoose.Schema({
    project_id: String,
    vendor_id: String,
    type: String,
    date: Date,
    amount_due: Number,
    payments: [{
        payment_id: String,
        payment_date: Date,
        trans_type: String,
        trans_id: String,
        payment_amt: Number
    }],
    total_paid: Number
}, {collection: 'expenses'})

let expenseModel = mongoose.model('expenses', expenseSchema);

module.exports = expenseModel
