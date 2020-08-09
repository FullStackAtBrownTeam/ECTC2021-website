import React, { Component } from "react";

class Splash extends Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            additionalImagesMobile: this.props.additionalImagesMobile? this.props.additionalImagesMobile : [],
            additionalImagesDesktop: this.props.additionalImagesDesktop? this.props.additionalImagesDesktop : []
        };
        console.log(this.state);
    }

    renderAdditionalImagesDesktop = () => {
        return this.state.additionalImagesDesktop.map((imgData) => {
            return <img 
                id={imgData.id? imgData.id : ""} 
                class="asset-desktop"
                src={imgData.source}
                alt=""
                style={imgData.style? imgData.style : {}} />
        });
    }

    renderAdditionalImagesMobile = () => {
        return this.state.additionalImagesMobile.map((imgData) => {
            return <img 
                id={imgData.id? imgData.id : ""} 
                class="asset-mobile"
                src={imgData.source}
                alt=""
                style={imgData.style? imgData.style : {}} />
        });
    }

    // RENDER FUNCTION
    render() {
        return (
            <div id="splash-container">
                {this.props.children}
                {this.renderAdditionalImagesDesktop()}
                {this.renderAdditionalImagesMobile()}
            </div>
        );
    }

}

export default Splash;