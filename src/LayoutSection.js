import React, { Component } from "react";

class LayoutSection extends Component {

    constructor(props) {
        super(props);

        // Grab any custom styling for this section div from the raw JSON content object
        const extraStyles = {};
        let extraProps = [];
        let extraClass = "";
        if (this.props.rawSection) {
            if (this.props.rawSection.minHeight) {
                extraStyles["minHeight"] = this.props.rawSection.minHeight;
            }
            if (this.props.rawSection.className) {
                extraClass = this.props.rawSection.className;
            }
            if (this.props.rawSection.assets) {
                extraProps = this.props.rawSection.assets;
            }
        }

        this.state = {
            sectionName: this.props.sectionName? this.props.sectionName : "",
            sectionID: this.props.sectionID? this.props.sectionID : "",
            inlineStyle: extraStyles,
            assets: extraProps,
            class: extraClass
        };
    }

    // RENDER FUNCTION
    render() {
        return (
            <div 
                style={this.state.inlineStyle} 
                className={"layout-section-container " + this.state.class}
                id={this.state.sectionID}>
                {this.props.children}
            </div>
        );
    }

}

export default LayoutSection;