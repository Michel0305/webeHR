var express = require('express');
var router = express.Router();
var basedata = require('./components/user');

router.get('/users',(req,res,next)=>{
    let aaa = basedata.getAllUser()
    res.send(aaa);
})

module.exports = router;