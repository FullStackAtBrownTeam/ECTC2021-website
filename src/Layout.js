import React, { Component } from "react"
import LayoutSection from "./LayoutSection"
import Splash from "./Splash"

/**
 * Component govening the entire website/page layout, contains all 
 * parts of the website.
 */
class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: this.parseContent(this.props.sections? this.props.sections : []),
            splashDesktop: this.props.splashDesktop? this.props.splashDesktop : {},
            splashMobile: this.props.splashMobile? this.props.splashMobile : {},
        };
    }
    
    // Parses source content (to feed to Layout)
    parseContent = (rawSections) => {
        const sections = [];
        rawSections.forEach((rawSection, i) => {
            const header = rawSection.header;
            const id = "section-" + i; // TODO: may not be needed
            const renderedContent = 
                <LayoutSection key={i} rawSection={rawSection} sectionID={id} />;    
            sections.push({header, id, renderedContent, rawSection})
        });
        return sections;
    }

    renderSections = () => {
        return this.state.sections.map(s => s.renderedContent);
    }

    // RENDER FUNCTION
    render() {
        return (
            <div id="layout-main">
                <Splash 
                    additionalImagesDesktop={this.state.splashDesktop.additionalImages}
                    additionalImagesMobile={this.state.splashMobile.additionalImages}
                    >
                    <img id="splash-center-desktop" alt="" src={this.state.splashDesktop.centerImage}></img>
                    <img id="splash-center-mobile" alt="" src={this.state.splashMobile.centerImage}></img>
                </Splash>
                {this.renderSections(this.state.sections)}
                <footer></footer>
            </div>
        );
    }
}

export default Layout;