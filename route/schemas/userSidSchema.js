//take all the things that is required.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema using the things
var UserSessionSchema = new Schema({
    username:String,
    sessionId:String
});

//create  the model using the schema
var UserSession = mongoose.model('UserSession',UserSessionSchema);

//export the model from the module
module.exports = UserSession;