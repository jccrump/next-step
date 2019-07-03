const express = require('express');
const router = express.Router();
const customerModel = require('../models/customerModel')

router.get('/customers', (req, res)=>{
    customerModel.find()
        .then((docs)=>{
            if (docs.length > 0){
                res.send(docs)
            } else{
                res.send('Sorry there are no customers yet.')
            }
            
        })
})

router.get('/customer/:id', (req, res)=>{
    let customer_id = req.params.id
    
    customerModel.findOne({"_id": customer_id})
        .then((customer)=>{
            res.send(customer)
        })
        .catch(err => console.log(err))
})

router.post('/addcustomer', (req, res)=>{
    console.log(req.body)
    let newCustomer = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        street_address: req.body.street_address,
        city: req.body.city,
        zip: req.body.zip,
        company_name: req.body.company_name,
        phone: req.body.phone,
        email: req.body.email
    }

    let data = new customerModel(newCustomer)
    data.save();

    res.send()
})

module.exports = router;