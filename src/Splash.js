import React, { Component } from "react";

class Splash extends Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            centerImage: this.props.centerImage,
            additionalImages: this.props.additionalImages? this.props.additionalImages : []
        };
    }

    // TODO: add support for additional images
    // TODO: add alt field

    // RENDER FUNCTION
    render() {
        return (
            <div id="splash-container">
                {/* {this.state.centerImage? <img className="splash-center-image" alt=""></img> : ""} */}
                {this.props.children}
            </div>
        );
    }

}

export default Splash;