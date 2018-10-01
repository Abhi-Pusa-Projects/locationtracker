var express = require('express');
//var indexpage = require('./public/index.html');
var path = require('path');
var bodyParser = require('body-parser');
var savelocationmethod = require('./apis/save_location');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();

// app.get('/',function(req,res){
//     res.sendFile(indexpage);
// });

app.use(bodyParser.json());

app.use('/js',express.static(path.join(__dirname,'/dist')));

app.use("/postlocation",savelocationmethod);

app.get('/',function(req,res){
    console.log(path.join(__dirname,'public'));
    res.sendFile('index.html',{root: path.join(__dirname,'public')});
});

io.on('connection',function(socket){
    console.log("a user got connected");
    socket.on('change color ',(color)=>{
        console.log('change color to:',color);
        io.sockets.emit()
    })
    socket.on('disconnect',function(){
        console.log('a user got disconnected');
    })
})

http.listen(3000,function(){
    console.log("application is running on port 3000");
});