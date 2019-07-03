const express = require('express');
const mongoose = require('mongoose');
const expense = require('./routes/expense')
const customer = require('./routes/customer');
const projects = require('./routes/projects');
const vendor = require('./routes/vendor')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()
const port = 5000
const app = express();

mongoose.connect(process.env.DATABASE, { useFindAndModify: false, useNewUrlParser:true})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', expense)
app.use('/api', projects)
app.use('/api', customer)
app.use('/api', vendor)

app.listen(port, ()=>{
    console.log('Server is Up.')
})