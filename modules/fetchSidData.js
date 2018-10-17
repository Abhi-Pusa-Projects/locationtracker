var mongoose = require('mongoose');

var UserSession = require('../route/schemas/userSidSchema');

var fetchSessionData = function(usrname){
    mongoose.connect('mongodb://localhost/mongoose_basics',function(err){
        if(err){
            console.log("not able to connect");
        }else{
            UserSession.find({},function(err,data){
                if(err){
                    console.log("not able to retrieve the data");
                }else{
                    console.log("data retrieved",data);
                }
            })
        }
    })
}

module.exports = fetchSessionData;