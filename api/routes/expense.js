const express = require('express');
const router = express.Router();
const expenseModel = require('../models/expenseModel')
const expensePaymentCounterModel = require('../models/expensePaymentCounterModel')
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
router.post('/expense/:id/changefilestatus', (req, res)=>{
    let expense_id = req.params.id
    expenseModel.findByIdAndUpdate(expense_id, {
        $set:{filing_status:{status: true, location: req.body.fileLocation, date: getDate()}}
    }).then((expense)=>{
        if(expense){
            let expenseStatus = checkStatus(expense.approval_status.status,
                                            expense.amount_due,
                                            expense.total_paid,
                                            true,
                                            req.body.fileLocation,
                                            expense.reconcile_status.status)

            expenseModel.findByIdAndUpdate(expense_id, {
                $set:{status:expenseStatus}
            }).then((expense)=>{
                if(expense){
                    expense.status = expenseStatus
                    res.send({"success": true, data:expense})
                }
            }).catch(err => err && console.log(err))
        } else{
            res.send({"success": false, data:{}})
        }
        
    })
})
router.post('/expense/:id/changestatus', (req, res)=>{
    let expense_id = req.params.id

    console.log(expense_id, req.body.status)

    

    expenseModel.findByIdAndUpdate(expense_id,{
        $set:{
            approval_status:{
                status: req.body.status,
                date: getDate()
            }
        }
    }, {upsert: true})
    .then((expense)=>{
        if(expense){
            expense.status = checkStatus(req.body.status,
                                                expense.amount_due,
                                                expense.total_paid,
                                                expense.filing_status.status,
                                                expense.filing_status.location,
                                                expense.reconcile_status.status)
            expenseModel.findByIdAndUpdate(expense_id,{
                $set:{
                    status: expense.status
                }
            }).catch((err)=> err && console.log(err))

            res.send({"success": true, data:expense})
        } else{
            res.send({"success": false, data:'There was an issue.'})
        }
    })
    .catch(err => err && console.log(err))
})

router.post('/expense/:id/reconcile', (req, res)=>{
    let expense_id = req.params.id

    expenseModel.findByIdAndUpdate(expense_id, {
        $set:{"reconcile_status":{
            status:req.body.status,
            date: Date()
        }}
    }, {safe: true, upsert: true})
    .then((expense)=> {
        if(expense){
            expense.status = checkStatus(expense.approval_status.status,
                                        expense.amount_due,
                                        expense.total_paid,
                                        expense.filing_status.status,
                                        expense.filing_status.location,
                                        req.body.status)
            console.log(expense.status)
            console.log(req.body.status)
            expenseModel.findByIdAndUpdate(expense_id, {
                $set:{status: expense.status}
            }).then(doc => res.send(doc))
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
})


router.post('/expense/:id/removepayment', (req, res)=>{
    let expense_id = req.params.id

    expenseModel.findByIdAndUpdate(expense_id, {
        $pull:{payments:{id:req.body.paymentID}},
        $inc:{total_paid: -parseFloat(req.body.paymentAmount)}
        
    }, (err, doc) => {
        if(doc){

            doc.status = checkStatus(doc.approval_status.status, 
                                    doc.amount_due,
                                    (doc.total_paid - parseFloat(req.body.payment)),
                                    doc.filing_status.status,
                                    doc.filing_status.location,
                                    doc.reconcile_status.status)
            console.log(doc.status)
            expenseModel.findByIdAndUpdate(expense_id, {
                $set:{status: doc.status}
            }).then((doc) => {
                res.send({"success": true, data:doc})
            })
        } else {
            res.send({"success": false, data:err})
        }
        
    })

})
router.post('/expense/:id/addpayment', (req, res)=>{
    let expense_id = req.params.id
    
    expensePaymentCounterModel.findByIdAndUpdate("5d0d0d26fb6fc00e79ae0534",{
        $inc:{count: 1}
    }).then((count)=>{
        expenseModel.findByIdAndUpdate(expense_id, {
            $push:{"payments":{
                id: count.count,
                date: req.body.date,
                type: req.body.type,
                trans_num: req.body.trans_num,
                amount: req.body.amount
            }},
            $inc:{total_paid: req.body.amount}
            }, {safe: true, upsert: true})
        .then((expense)=>{
            if(expense){
                expense.total_paid += parseFloat(req.body.amount)
                expense.status = checkStatus(expense.approval_status.status,
                                                    expense.amount_due,
                                                    expense.total_paid,
                                                    expense.filing_status.status,
                                                    expense.filing_status.location,
                                                    expense.reconcile_status.status)
                expenseModel.findByIdAndUpdate(expense_id,{
                    $set:{
                        status: expense.status
                    }
                }).catch((err)=> err && console.log(err))
    
                res.send({"success": true, data:expense})
            } else {
                res.send({"success": false, data:"An issue occured."})
            }
        })
        .catch(err => err && console.log(err))
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
router.post('/expense/:id/addnote',(req,res)=>{
    let expense_id = req.params.id

    expenseModel.findByIdAndUpdate(expense_id, {
        $push:{"notes":{
            body:req.body.body,
            dateCreated: req.body.date,
            user: req.body.user
        }}}, {safe: true, upsert: true})
    .then(expense => res.send(expense))
    .catch(err => console.log(err))
})
let getDate = () =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}

let checkStatus = (approval_status, expenseTotal, expenseTotalPaid, fileStatus, fileLocation, recStatus) =>{
    if(approval_status == "Approved"){
        if(expenseTotal == expenseTotalPaid){
            if(fileLocation == "Customers Folder"){
                if(recStatus == true ){
                    return "Closed"
                } else {
                    return "Ready to Reconcile"
                }
            }else if(fileLocation == "Missed Labor"){
                if(missedLocation != ""){
                    if(recStatus == true){
                        return "Closed"
                    } else{
                        return "Ready to Reconcile"
                    }
                } else {
                    return "Missed Labor"
                } 
            } else{
                return "Ready to File"
            }
        } else{
            return "Ready to Pay"
        }
    }else if(approval_status == "Denied"){
        return "Closed"
    } else if(approval_status == "Hold"){
        return "Pending Approval"
    } else{
        return "Pending Approval"
    }
}

module.exports = router