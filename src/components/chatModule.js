import React, { Component } from 'react';
import { connect,updateUsername,sendmessage } from './api';

class ChatApp extends Component {

  constructor(props) {
    super(props);
    connect(message => {
      console.log(message);
    });
    this._onclickhandler = this._onclickhandler.bind(this);
    this._onclickmessage = this._onclickmessage.bind(this);
  }

  _onclickhandler(){
    //sendmessage();
    console.log("on click handler method", this.refs.username.value);
    var username = this.refs.username.value;
    updateUsername(username);
  }

  _onclickmessage(){
     var message = this.refs.message.value;
     sendmessage(message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input ref="username" placeholder="enter your username"></input>
        <button onClick={this._onclickhandler}>Click Me</button>
        <input ref="message" ></input>
        <button onClick={this._onclickmessage}>Send</button>
      </div>
    );
  }
}

export default ChatApp;