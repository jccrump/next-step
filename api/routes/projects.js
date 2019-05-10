const express = require('express');
const router = express.Router();
const projectModel = require('../models/projectModel')

// Add project
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
router.get('/project/:id', (req, res)=>{
    let project_id = req.params.id

    projectModel.findOne({"_id":project_id})
        .then(project =>{
            res.send(project)
        })
        .catch(err => console.log(err))
})

// Get all projects for this customer
router.get('/customer/:id/projects', (req, res)=>{
    let customer_id = req.params.id
    projectModel.find({"customer_id": customer_id})
        .then(projects => res.send(projects))
        .catch(err => console.log(err))
})
//Get all projects
router.get('/projects', (req, res)=>{
    projectModel.find()
        .then((docs)=>{
            if (docs.length > 0){
                res.send(docs)
            } else{
                res.send('Sorry there are no projects yet.')
            }
            
        })
})

module.exports = router;