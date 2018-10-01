import React,{ Component } from 'react';

var video;
var cameraStream = '';

class VideoCapture extends Component{
    
    constructor(){
        super();
        this.state={
            cameraState:"stop"
        }
        this._onClickHandler = this._onClickHandler.bind(this);
        this._startcamera = this._startcamera.bind(this);
    }
    _onClickHandler(){
        console.log("this on click handler method is called ");
        if(this.state.cameraState  == "stop"){
            video.srcObject=undefined;
            this.setState({cameraState:"start"})
        }else if(this.state.cameraState == "start"){
            this._startcamera();
            this.setState({cameraState:"stop"});
        }
        
    }
    // componentWillMount(){
        
    // }
    componentDidMount(){
       this._startcamera();
    }
    _startcamera(){
        console.log("method to start the camera");
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia = navigator.getUserMedia 
                                || navigator.webkitGetUserMedia 
                                ||navigator.mozGetUserMedia 
                                || navigator.msGetUserMedia;
        
        console.log("component will mount method",this.refs);
        video = document.getElementById("video");
        video.setAttribute('playsinline', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.style.width = '800px';
        video.style.height = '800px';
        console.log("video var",video);
        if(navigator.getUserMedia){
            navigator.mediaDevices.getUserMedia({audio:false,video:true}).then(function success(stream) {
                video.srcObject = stream;
              });
        }else{
            console.log("video capture is not supported in this device");
        }
    }
    render(){
        return(
            <div>
                <p>this module will show video capturing thing</p>
                <video id="video" ref="video"></video>
                <input type="button" style={{clear:"both",float:"right"}} id="stopbt" value={this.state.cameraState} onClick={this._onClickHandler}/>
            </div>
        )
    }
}

export default VideoCapture;