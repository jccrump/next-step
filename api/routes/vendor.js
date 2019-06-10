const express = require('express');
const router = express.Router();
const vendorModel = require('../models/vendorModel')

router.get('/vendor', (req, res)=>{
    vendorModel.find()
        .then((docs)=>{
            if (docs.length > 0){
                res.send(docs)
            } else{
                res.send('Sorry there are no vendors yet.')
            }
            
        })
})

module.exports = router