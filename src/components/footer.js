import React,{Component} from 'react';
import {Navbar} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <div style={{position:"fixed",bottom:"0px",width:"100%"}}>
                <Navbar collapseOnSelect style={{marginBottom:"0px",textAlign:"center",paddingTop:"15px",background:"#f8f8f8"}}>
                    <span>Footer content goes here</span>
                </Navbar>
            </div>
        )
    }
}

export default Footer;