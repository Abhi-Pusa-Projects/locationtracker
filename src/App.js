import React, { Component } from 'react';
import './App.less';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import VideoCapture from './components/videocapture';
import ChatApp from './components/chatModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Content/> */}
        {/* <VideoCapture /> */}
        <ChatApp />
        <Footer/>
      </div>
    );
  }
}

export default App;
