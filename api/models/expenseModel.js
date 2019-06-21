const mongoose = require('mongoose');
const expensePaymentSchema = require('./expensePaymentSchema')
const expenseApprovalStatusSchema = require('./expenseApprovalStatusModel')

let expenseSchema = mongoose.Schema({
    project_id: String,
    vendor_id: String,
    status: String,
    type: String,
    date: Date,
    amount_due: Number,
    payments: [expensePaymentSchema],
    total_paid: Number,
    approval_status: {
        status: String,
        date: String
    },
    filing_status: {
        status: String,
        location: String,
        date: String
    },
    reconcile_status: {
        status: String,
        date: String
    }
}, {collection: 'expenses'})

let expenseModel = mongoose.model('expenses', expenseSchema);

module.exports = expenseModel
