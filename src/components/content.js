import React,{Component} from 'react';
import MapContainer from './container';
import {Grid,Row,Col} from 'react-bootstrap';

class Content extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <MapContainer />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Content;