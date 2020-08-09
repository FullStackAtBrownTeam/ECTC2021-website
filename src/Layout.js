import React, { Component } from "react"
import ReactMarkdown from "react-markdown/with-html"
import LayoutSection from "./LayoutSection"
import Splash from "./Splash"

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: this.parseContent(this.props.sections? this.props.sections : []),
            splashDesktop: this.props.splashDesktop? this.props.splashDesktop : {},
            splashMobile: this.props.splashMobile? this.props.splashMobile : {},
        };
    }
    

    // Parse given content object into an array of {header, id, renderedContent, rawSection}
    parseSections = (rawSections) => {
        const sections = []
        rawSections.forEach((rawSection, i) => {
            const header = rawSection.header;
            const id = "section-" + i;
            const renderedContent = <ReactMarkdown source={rawSection.content.join("\n\n")} escapeHtml={false}/>
            sections.push({header, id, renderedContent, rawSection})
        });
        return sections;
    }


    // Parses source content (to feed to Layout)
    parseContent = (rawSections) => {
        const sections = [];
        rawSections.forEach((rawSection, i) => {
            const header = rawSection.header;
            const id = "section-" + i; // TODO: may not be needed
            const renderedContent = <LayoutSection rawSection={rawSection} sectionID={id}></LayoutSection>;    
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