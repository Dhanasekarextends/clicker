import React, { Component } from "react";
import "../App.css";

class Reset extends Component{
    render() {
        return(
            <div className="key reset" onClick={this.props.onClick}><i className="fa fa-retweet" aria-hidden="true"></i></div>
        )
    }
}

export default Reset;