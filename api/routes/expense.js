const express = require('express');
const router = express.Router();
const expenseModel = require('../models/expenseModel')
const projectModel = require('../models/projectModel')
const mongoose = require('mongoose');



router.get('/expenses', (req,res)=>{
    expenseModel.find()
        .then((expense)=>{
            res.send(expense)
        })
})
router.get('/expense/:id', (req,res)=>{
    let expense_id = req.params.id;

    expenseModel.findById(expense_id)
        .then((expense, err)=>{
            if(err){
                res.send(err);
            }
            res.send(expense);
        })
})
router.get('/project/:id/expenses', (req,res)=>{
    let projectId = req.params.id;

    expenseModel.find({'project_id':projectId})
        .then((expenses)=>{
            res.send(expenses)
        })
})
router.post('/addexpense', (req, res)=>{

    let newExpense = {
        project_id: req.body.project_id,
        vendor_id: req.body.vendor_id,
        type: req.body.type,
        date: req.body.date,
        amount_due: req.body.amount_due,
        payments: [],
        total_paid: 0
    }


    let data = new expenseModel(newExpense);
    data.save();
    res.send('Its worked')
})
// Work on this!
router.put('/expense/:id', (req, res)=>{
    let expense_id = req.params.id
    
    expenseModel.findByIdAndUpdate(expense_id, {$set:{vendor_id:req.body.vendor_id}},{new:true})
        .then((doc)=>{
            if(doc){
                res.send({"sucess":true, data:doc})
            } else{
                res.send({"sucess":false, data:doc})
            }
            
        }).catch((err)=>{
            console.log(err)
        })
})
router.post('/expense/:id/changestatus', (req, res)=>{
    let expense_id = req.params.id

    console.log(expense_id, req.body.status)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    expenseModel.findByIdAndUpdate(expense_id,{
        $set:{
            approval_status:{
                status: req.body.status,
                date: today
            }
        }
    }, {safe: true, upsert: true})
    .then((doc)=>{
        if(doc){
            res.send({"success": true, data:doc})
        } else{
            res.send({"success": false, data:doc})
        }
    })
    .catch(err => err && console.log(err))
})
router.post('/expense/:id/addpayment', (req, res)=>{
    let expense_id = req.params.id
    
    expenseModel.findByIdAndUpdate(expense_id, {
        $push:{"payments":{
            id:'2',
            date: req.body.date,
            type: req.body.type,
            trans_num: req.body.trans_num,
            amount: req.body.amount
        }}
    }, {safe: true, upsert: true})
    .then((doc)=>{
        if(doc){
            res.send({"success": true, data:doc})
        } else{
            res.send({"success": false, data:doc})
        }
    })
    .catch(err => err && console.log(err))
})

router.delete('/expense/:id', (req, res)=>{
    let expense_id = req.params.id;

    expenseModel.findOneAndDelete({_id: expense_id})
        .then((docs)=>{
            if(docs){
                res.send({"success":true, date:docs});
            } else {
                res.send({"success":false, data:"No expense by that ID exist."})
            }
        }).catch((err)=>{
            console.log(err);
        })
})
module.exports = router