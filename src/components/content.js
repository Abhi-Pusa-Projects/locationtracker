import React,{Component} from 'react';
import MapContainer from './container';

class Content extends Component{
    render(){
        return(
            <div style={{margin:"auto",width:"90%"}}>
                <MapContainer />
            </div>
        )
    }
}

export default Content;