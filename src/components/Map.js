import React, { Component } from 'react';
import './Map.css';

class Map extends Component{
    render(){
        let imagePath;
        if(this.props.imagename){
            imagePath = 'images/'+ this.props.imagename;
        }
        else { // redundant block since Ihave state, and Im always passing a value. but in tests I do simulate a shallow test with no props
            imagePath = 'images/default.png';
        }
        return( 
            <div className="MapBox">
                <img src={imagePath} alt={this.props.location} />
            </div>
        );
    }
}

export default Map;