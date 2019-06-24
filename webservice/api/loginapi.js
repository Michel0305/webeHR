var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body)
    console.log('執行啊！')
})

router.post('/info', (req, res) => {
    res.send("bbbbbbbb");
})

module.exports = router;