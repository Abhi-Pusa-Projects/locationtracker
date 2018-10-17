// var express = require('express');
// //var indexpage = require('./public/index.html');
var path = require('path');

var sessionroute = require('./route/userSidApi');
var saveSessionData = require('./modules/saveSidData');
var fetchSessionData = require('./modules/fetchSidData');
// var bodyParser = require('body-parser');
// var savelocationmethod = require('./apis/save_location');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// var app = express();

// // app.get('/',function(req,res){
// //     res.sendFile(indexpage);
// // });

// app.use(bodyParser.json());


// });

// io.on('connection',function(socket){
//     console.log("a user got connected");
//     socket.on('change color ',(color)=>{
//         console.log('change color to:',color);
//         io.sockets.emit()
//     })
//     socket.on('disconnect',function(){
//         console.log('a user got disconnected');
//     })
// })

// http.listen(3000,function(){
//     console.log("application is running on port 3000");
// });


var express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use('/js',express.static(path.join(__dirname,'/dist')));

app.use('/savesession',sessionroute);

app.get('/',function(req,res){
    console.log(path.join(__dirname,'public'));
    res.sendFile('index.html',{root: path.join(__dirname,'public')});
});



io.on('connection', function(socket){
	console.log("Client Successfully Connected");
    socket.emit('chat', "hello world");
    socket.on('recieve_data',function(message){
        console.log("received data from server side",message);
    })
    socket.on('update_username',function(data){
        //console.log("update username",data,socket.id);
        socket.username = data.username;
        console.log("update username",data,socket.id,socket.username);
        var result = saveSessionData(socket.id,socket.username);
        console.log("data result",result);
    })
    socket.on("new_message",function(data){
        fetchSessionData(socket.username);
        io.sockets.emit("new_message",{message:data.message,username:socket.username});
    })  
})

server.listen(5000, () => {
	console.log("Backend Server is running on http://localhost:5000");
})