import React, { Component } from "react";
import "../App.css";

class Value extends Component{
    render() {
        return(
            <div className="value">{this.props.sendVal}</div>
        )
    }
}

export default Value;