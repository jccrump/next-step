const express = require('express');
const router = express.Router();
const projectModel = require('../models/projectModel')


router.post('/addproject', (req, res)=>{
    let newProject = {
        customer_id: req.body.customer_id,
        pm_id: req.body.pm_id,
        po_num: req.body.po_num,
        street_address: req.body.street_address,
        city: req.body.city,
        zip: req.body.zip
    }



    let data = new projectModel(newProject)
    data.save();

    res.send('This was added')
})

router.get('/projects/:id', (req, res)=>{
    
})

router.get('/projects', (req, res)=>{
    projectModel.find()
        .then((docs)=>{
            if (docs.length > 0){
                res.send(docs)
            } else{
                res.send('Sorry there are no customers yet.')
            }
            
        })
})

module.exports = router;