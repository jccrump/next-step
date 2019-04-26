var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.send('Root API Call Router.')
})

module.exports = router;