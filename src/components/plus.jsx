import React, { Component } from "react";
import "../App.css";

class Plus extends Component {
    render() {
        return(
            <div className="key plus" onClick={this.props.onClick}><i className="fa fa-plus" aria-hidden="true"></i></div>
        )
    }
}

export default Plus;