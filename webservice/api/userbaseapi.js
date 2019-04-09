var express = require('express');
var router = express.Router();
var basedata = require('./components/user');

router.get('/users',(req,res,next)=>{
   basedata.getAllUser().then((users)=>{
       res.send(users)
   }).catch((err)=>{
       res.send(err)
   })
})

router.get('/department',(req,res,next)=>{
    basedata.getDepartment().then((department)=>{
        res.send(department)
    }).catch((err)=>{
        res.send(department)
    })
})

module.exports = router;