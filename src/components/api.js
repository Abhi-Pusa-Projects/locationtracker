import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

function connect(cb) {
  socket.on('chat', (message) => {
    console.log(message)
    cb(message);
  })

  socket.on('new_message',(message) => {
      cb(message);
  })
}

function updateUsername(user){
    console.log("enter your username",user);
    socket.emit("update_username",{"username":user});
}

function sendmessage(message){
    console.log("message",message);
    socket.emit("new_message",{"message":message});
}

export { connect,sendmessage,updateUsername }