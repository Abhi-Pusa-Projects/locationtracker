var express = require('express');

let mongoose = require('mongoose')

var locationSchema = new mongoose.Schema({
    longitude:String,
    latitude:String
})

var router = express.Router();

router.post('/',function(req,res,next){
    console.log("abhinav",req.body);
    var obj = {"abhinav":"ashesh","how are you":"this is good"};
    //res.send(obj);
    res.send(req.body);
});

module.exports = router;