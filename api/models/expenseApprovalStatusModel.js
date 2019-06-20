const mongoose = require('mongoose');

let expenseApprovalStatusSchema = mongoose.Schema(
    {
        date: String,
        status: String

    }, {collection: 'expenses'}
)

module.exports = expenseApprovalStatusSchema