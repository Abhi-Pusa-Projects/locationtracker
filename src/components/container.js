

import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polygon} from 'google-maps-react';
import {Button} from 'react-bootstrap';
 
export class MapContainer extends Component {

  constructor(){
    super();
    this.state = {latitude:"",longitude:""}
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.getMapComponent = this.getMapComponent.bind(this);
    
  }

  onClickHandler(){
    //console.log("onclick handler method is being called");
    //this.getLocation();
    //setInterval(this.getLocation(),5);
  }

  componentWillMount(){
    console.log("component will mount method is getting called");
    //this.getLocation();
    setInterval(() => this.getLocation(), 1000);
  }

  getLocation() {
    console.log("getLocation method is called after each second");
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.setState({latitude:37.778519,longitude:-122.405640});
      }
  }
  showPosition(position) {
      console.log("show map method is called",position.coords.latitude,position.coords.longitude);
      this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude});
  }

  getMapComponent(){
    // const triangleCoords = [
    //   {lat: 25.774, lng: -80.190},
    //   {lat: 18.466, lng: -66.118},
    //   {lat: 32.321, lng: -64.757},
    //   {lat: 25.774, lng: -80.190}
    // ];
    return(
      <div>
      <div style={{margin:"auto",testAlign:"center",width:"100%",height:"600px",overflow:"hidden",position:"relative"}}>
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            initialCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
            className={'map'}
            zoom={20}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            icon={{
              url: "/js/icon.jpg",
              anchor: new window.google.maps.Point(10,10),
              scaledSize: new window.google.maps.Size(64,64)
            }} 
            position={{lat: this.state.latitude, lng: this.state.longitude}} />
            {/* <Polygon
            paths={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35} /> */}
        </Map>
      </div>
      <Button bsStyle="primary" style={{marginTop:"20px"}} onClick={this.onClickHandler}>Click Me</Button>
      </div>)
  }
  
  render() {
    console.log("render method is called",this.state.latitude,this.state.longitude);

    return(
      <div>
        {(this.state.latitude !== "" && this.state.longitude !== "") ? (this.getMapComponent()) : (<div></div>)}
      </div>  
    )
    
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyASS-Zen7n1KAXgrFDh68wtMXTpJgpwIJU')
})(MapContainer)