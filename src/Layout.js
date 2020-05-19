import React, { Component } from "react";
import LayoutSection from "./LayoutSection"
import Splash from "./Splash"

class Layout extends Component {

    // TODO: remove?
    constructor(props) {
        super(props);
        this.state = {
            sections: this.props.sections? this.props.sections : []
        };
    }

    getLayoutSections = () => {
        return this.state.sections.map(sectionContent => 
            <LayoutSection content={sectionContent}>
                {sectionContent}
            </LayoutSection>
        );
    }

    getDefaultLayoutSections = () => {
        return ([
            <LayoutSection>
                <div className="section-text">
                    <h1>Looking back, moving forward.</h1>
                    <p>text text text...</p>
                </div>
            </LayoutSection>,
            <LayoutSection>
                <div className="section-text">
                    <h1>Contact</h1>
                    <h2>Phone</h2>
                    <p>(###)###-####</p>
                    <br />
                    <h2>Email</h2>
                    <p>xxx@gendotaiko.com</p>
                </div>
            </LayoutSection>
        ]);
    }

    // RENDER FUNCTION
    render() {
        return (
            <div id="layout-main">
                <Splash></Splash>
                {this.getDefaultLayoutSections()}
                <footer></footer>
            </div>
        );
    }

}

export default Layout;