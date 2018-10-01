import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

class ChatApp extends Component{
    constructor(){
        super();
        this.state={
            endpoint:"http://locahost:3000",
            color:"white"
        }
        this.send = this.send.bind(this);
        this.setColor = this.setColor.bind(this);
    }
    send(){
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('change color',this.state.color); 
    }
    setColor(color){
        this.setState({ color });
    }
    render(){
        const socket = socketIOClient(this.state.endpoint);
        socket.on('change color',(col) => {
            document.body.style.backgroundColor = col;
        })
        return(
            <div style={{textAlign:"center"}}>
                <button onClick={()=> this.send()}>Change Color</button>
                <button onClick={() => this.setColor('blue')}>Blue</button>
                <button onClick={()=> this.setColor('red')}>Red</button>
            </div>
        )
    }
}

export default ChatApp;