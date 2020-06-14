import React, { Component } from "react"
import ReactMarkdown from "react-markdown/with-html"
import LayoutSection from "./LayoutSection"
import Splash from "./Splash"

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: this.parseSections(this.props.sections? this.props.sections : []),
            splashDesktop: this.props.splashDesktop? this.props.splashDesktop : "",
            splashMobile: this.props.splashMobile? this.props.splashMobile : "",
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

    renderSections = () => {
        return this.state.sections.map(section => 
            <LayoutSection sectionName={section.header} rawSection={section.rawSection} sectionID={section.id}>
                {section.renderedContent}
            </LayoutSection>
        );
    }

    // RENDER FUNCTION
    render() {
        return (
            <div id="layout-main">
                <Splash>
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