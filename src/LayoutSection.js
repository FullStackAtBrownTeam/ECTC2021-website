import React, { Component } from "react";

class LayoutSection extends Component {

    // RENDER FUNCTION
    render() {
        return (
            <div className="layout-section-container">
                {this.props.children}
            </div>
        );
    }

}

export default LayoutSection;