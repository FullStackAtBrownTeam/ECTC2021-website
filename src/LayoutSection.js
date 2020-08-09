import React, { Component } from "react";

class LayoutSection extends Component {

    constructor(props) {
        super(props);

        // Grab any custom styling for this section div from the raw JSON content object
        // TODO: remove
        const extraStyles = {};
        let rawHTML;
        let additionalImages = [];
        if (this.props.rawSection) {
            if (this.props.rawSection.minHeight) {
                extraStyles["minHeight"] = this.props.rawSection.minHeight;
            }
            if (this.props.rawSection.content) {
                rawHTML = this.props.rawSection.content.join("\n\n");
            }
            if (this.props.rawSection.additionalImages) {
                additionalImages = this.props.rawSection.additionalImages;
            }
        }

        this.state = {
            sectionName: this.props.rawSection.header? this.props.rawSection.header : "",
            sectionID: this.props.sectionID? this.props.sectionID : "",
            inlineStyle: extraStyles,
            additionalImages: additionalImages,
            rawHTML: rawHTML
        };
    }

    renderAdditionalImages = () => {
        return this.state.additionalImages.map((imgData) => {
            return <img 
                id={imgData.id? imgData.id : ""} 
                src={imgData.source}
                alt=""
                style={imgData.style? imgData.style : {}} />
        });
    }

    // RENDER FUNCTION
    render() {
        console.log("section info");
        console.log(this.state);
        if (this.state.rawHTML) {
            return (
                <div 
                    style={this.state.inlineStyle} 
                    className="layout-section-container"
                    id={this.state.sectionID}
                    >
                        <div dangerouslySetInnerHTML={{__html: this.state.rawHTML}}></div>
                        {this.renderAdditionalImages()}
                </div>
            );
        } else {
            return (
                <div 
                    style={this.state.inlineStyle} 
                    className="layout-section-container"
                    id={this.state.sectionID}>
                    {this.props.children}
                    {this.renderAdditionalImages()}
                </div>
            );
        }
    }

}

export default LayoutSection;