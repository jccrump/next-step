const express = require('express');
const mongoose = require('mongoose');
const expense = require('./routes/expense')
const customer = require('./routes/customer');
const bodyParser = require('body-parser');
const port = 5000
const app = express();

mongoose.connect('mongodb://admin:Slinkey123@ds149146.mlab.com:49146/next-step', { useFindAndModify: false, useNewUrlParser:true})

app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', expense)
app.use('/api', customer)

app.listen(port, ()=>{
    console.log('Server is Up.')
})