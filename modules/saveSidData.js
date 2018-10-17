var mongoose = require('mongoose');

var UserSession = require('../route/schemas/userSidSchema');

var savesessionDetails = function(id,usrname){
    mongoose.connect('mongodb://localhost/mongoose_basics',function(err){
        if(err){
            console.log("not able to connect");
            return "not able to connect";
        }
        else{
            userSession = new UserSession({
                username:usrname,
                sessionId:id
            });
            userSession.save(function(err){
                if(err){
                    console.log("error happened");
                    return "not able to save the data";
                }else{
                    console.log("data saved successfully");
                    return "session saved successfully";
                }
            });
        }
    })
}

module.exports = savesessionDetails;