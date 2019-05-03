const mongoose = require('mongoose');

let projectSchema = mongoose.Schema({
    customer_id: String,
    pm_id: String,
    po_num: String,
    street_address: String,
    city: String,
    zip: String
}, {collection: 'projects'})

let projectModel = mongoose.model('projects', projectSchema);

module.exports = projectModel
