const mongoose = require('mongoose');

let expensePaymentSchema = mongoose.Schema(
    {
        id: String,
        date: String,
        type: String,
        trans_num: String,
        amount: Number

    }, {collection: 'expenses'}
)

module.exports = expensePaymentSchema
