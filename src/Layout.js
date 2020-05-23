import React, { Component } from "react"
import ReactMarkdown from "react-markdown"
import LayoutSection from "./LayoutSection"
import Splash from "./Splash"

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: this.parseSections(this.props.sections? this.props.sections : [])
        };
    }

    // Parse given content object into an array of {header, ref, renderedContent}
    parseSections = (rawSections) => {
        const sections = []
        rawSections.forEach(rawSection => {
            const header = rawSection.header;
            const ref = React.createRef();
            const renderedContent = rawSection.content.map(snippet => 
                <ReactMarkdown source={snippet} escapeHtml={false} />
                );
            sections.push({header, ref, renderedContent})
        });
        return sections;
    }

    renderSections = () => {
        return this.state.sections.map(section => 
            <LayoutSection ref={section.ref}>{section.renderedContent}</LayoutSection>);
    }

    // RENDER FUNCTION
    render() {
        return (
            <div id="layout-main">
                <Splash></Splash>
                {this.renderSections(this.state.sections)}
                <footer></footer>
            </div>
        );
    }

}

export default Layout;