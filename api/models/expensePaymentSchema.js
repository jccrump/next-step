const mongoose = require('mongoose');

let expensePaymentSchema = mongoose.Schema(
    {
        payment_id: String,
        payment_date: Date,
        trans_type: String,
        trans_id: String,
        payment_amt: Number

    }, {collection: 'expenses'}
)

module.exports = expensePaymentSchema
