import React, { Component } from "react";
import "../App.css";

class Minus extends Component{
    render() {
        return(  
            <div className="key minus" onClick={this.props.onClick}><i className="fa fa-minus" aria-hidden="true"></i></div>
        )
    }
}

export default Minus;