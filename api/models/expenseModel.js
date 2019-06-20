const mongoose = require('mongoose');
const expensePaymentSchema = require('./expensePaymentSchema')
const expenseApprovalStatusSchema = require('./expenseApprovalStatusModel')

let expenseSchema = mongoose.Schema({
    project_id: String,
    vendor_id: String,
    approval_status: {
        status: String,
        date: String
    },
    status: String,
    type: String,
    date: Date,
    amount_due: Number,
    payments: [expensePaymentSchema],
    total_paid: Number
}, {collection: 'expenses'})

let expenseModel = mongoose.model('expenses', expenseSchema);

module.exports = expenseModel
