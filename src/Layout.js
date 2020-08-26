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
        
         const numbers = [["Amy Lee", "https://i.imgur.com/U1QNodO.jpg", "Amy Lee", "Workshops/Hospitality", "amy@ectc2021.com"],
    ["Charlotte Whatley", "https://i.imgur.com/XPutjtS.jpg", "Charlotte Whatley", "Co-Director", "charlotte@ectc2021.com"], 
    ["Christianna Choe", "https://i.imgur.com/CvkCru9.jpg", "Christianna Choe", "Head of Hospitality", "christianna@ectc2021.com"],
    ["Eva Lau", "https://i.imgur.com/EyPZl3H.jpg", "Eva Lau", "Head of Publicity", "eva@ectc2021.com"],
    ["Hannah Ngo", "https://i.imgur.com/u2sEPPa.jpg", "Hannah Ngo", "Head of Final Concert", "hannah@ectc2021.com"],
    ["Jenny Tan", "https://i.imgur.com/H8dxXB2.jpg", "Jenny Tan", "Head of Finance", "jenny@ectc2021.com"],
    ["Jiyou Kang", "https://i.imgur.com/bqCUZ30.jpg", "Jiyou Kang", "Head of Facilities/Equipment", "jiyou@ectc2021.com"],
    ["Kelvin Yang", "https://i.imgur.com/26zzySv.jpg", "Kelvin Yang", "Head of Workshops", "kelvin@ectc2021.com"],
    ["Michael Chen", "https://i.imgur.com/VYLDFZ2.jpg", "Michael Chen", "Head of Documentation", "michael@ectc2021.com"],
    ["Sam Leung", "https://i.imgur.com/BWtQMFW.jpg", "Sam Leung", "Head of Publicity", "sam@ectc2021.com"],
    ["Shona O'Bryant", "https://i.imgur.com/b1yJVHI.jpg", "Shona O'Bryant", "Publicity", "shona@ectc2021.com"],
    ["Tina Guo", "https://i.imgur.com/mwKxnUF.jpg", "Tina Guo", "Workshops/Publicity", "tina@ectc2021.com"],
    ["TzuHwan Seet", "https://i.imgur.com/rmKI54v.jpg", "TzuHwan Seet", "Head of Facilities/Equipment", "hwan@ectc2021.com"],
    ["Yilan Sun", "https://i.imgur.com/1Iy5a93.jpg", "Yilan Sun", "Co-Director", "yilan@ectc2021.com"]];

        
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

<div id="layout-main">
<Splash></Splash>


<div id="popup-container">
    {numbers.map(function([btnName, picSrc, name, titleName, bio,sect1titl,sect1desc,sect2titl,sect2desc,sect3titl,sect3desc,sect4titl,sect4desc,sect5titl,sect5desc]){
        return (<Popup style="height: 100px;" btnName={btnName} pic1={picSrc} trigger={<button> Trigger</button>} position="right center" name={name} bio = {bio} 
            titleName = {titleName}
            sect1titl={sect1titl} sect1desc={sect1desc} 
            sect2titl={sect2titl} sect2desc={sect2desc} 
            sect3titl={sect3titl} sect3desc={sect3desc} 
            sect4titl={sect4titl} sect4desc={sect4desc} 
            sect5titl={sect5titl} sect5desc={sect5desc} ></Popup>)
      })}
</div>

{this.renderSections(this.state.sections)}

<footer></footer>
</div>
        );
    }
}

export default Layout;
