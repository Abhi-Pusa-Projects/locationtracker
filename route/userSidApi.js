var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserSession = require('./schemas/userSidSchema');

router.post('/',function(req,res,next){

    mongoose.connect('mongodb://localhost/mongoose_basics',function(err){
        if(err){
            console.log("not able to connect to the local database");
            res.send("database not connected");
        }else{
            console.log("this api is getting called");
            var session1 = new UserSession({
                username:"aashesh",
                sessionId:"sessiondetailsoftheid1"
            });
            
            session1.save(function(err){
                if(err){
                    console.log("error happened while saving the data ");
                    res.send("error is saving data");
                }
                else{
                    console.log("data got saved successfully");
                    res.send("data saved successfully");
                }
            })
        }
    })

    
})

module.exports = router;
