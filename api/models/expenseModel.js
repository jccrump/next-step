const mongoose = require('mongoose');
const expensePaymentSchema = require('./expensePaymentSchema')
const expenseApprovalStatusSchema = require('./expenseApprovalStatusModel')

let expenseSchema = mongoose.Schema({
    projectID: String,
    vendorID: String,
    expenseStatus: String,
    expenseType: String,
    expenseTrade: String,
    dateCreated: Date,
    dateDue: Date,
    expenseTotal: Number,
    amountPaid: Number,
    expensePayments: [expensePaymentSchema],
    approvalStatus: {
        status: String,
        user: String,
        dateApproved: String
    },
    filingStatus: {
        status: String,
        location: String,
        user: String,
        dateFiled: String
    },
    reconcileStatus: {
        status: String,
        user: String,
        dateReconciled: String
    },
    notes:[]
}, {collection: 'expenses'})

let expenseModel = mongoose.model('expenses', expenseSchema);

module.exports = expenseModel
