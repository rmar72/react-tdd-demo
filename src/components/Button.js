import React, { Component } from 'react';
import './Button.css';


class Button extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button 
                className="location-button"
                value = {this.props.location}
                onClick={this.props.handleClick}
            >
                {this.props.location ? this.props.location : "All Locations"}
            </button>
        );
    }
}

export default Button;