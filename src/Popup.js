import React, { Component } from "react";

class Popup extends Component {

    constructor(props) {
      super(props);
      this.state = {
        popupShow: false  
      };
    }
    
    handleClick = (event) => {
      //   const modal = document.querySelector(".modal")
      // modal.style.display = "block";
      console.log(this);
      this.setState({
        popupShow: true
      });
    }

    getHandleClickFunction() {
      const thisObj = this;
      return (event) => {
        thisObj.setState({
          popupShow: true
        });
      }
    }

    closeClick = () => {
           // modal.style.display = "none"
           this.setState({
             popupShow: false
           });
    }

    getPopupStyle = () => {
      if (this.state.popupShow) {
        return {display: "block"};
      } else {
        return {display: "none"};
      }
    }

    // RENDER FUNCTION
    render() {


      const popupStyle = {
        backgroundColor: "blue",
        margin: "10px", 
        padding: "10px",
        width: "100px",
        }
var popupStyle2= {  
  position: "fixed",  
  width: "100%", 
  height: "100%", 
  paddingTop: "20%", 
  paddingLeft: "20%",
  
  top: "0",  
  left: "0",  
  right: "0",  
  bottom: "0",  
  margin: "auto",  
  backgroundColor: "rgba(0,64,128, 0.9)" 
} 

var popupStyle3= {  
  position: "fixed",  
  width: 700, 
  height: 350, 
  paddingTop: "0%", 
  
  
  top: "0",  
  left: "0",  
  right: "0",  
  bottom: "0",  
  margin: "auto",  
  backgroundColor: "rgba(255,255,255, 0.9)" 
} 

var close = {
  fontSize: 50,
  float: "right",
  width: 50,
  cursor: "pointer",
  height: 60,
  marginRight: "-2.9%",
  marginTop: "-2%",
}
        return (
            <div>
            <div>
            <button onClick={this.handleClick}>{this.props.btnName}</button>
          </div>


          <div class="modal" style={this.getPopupStyle()}>
          <div class="modal_content" style={popupStyle2}>
          <div class="modal_content" style={popupStyle3}>
            <span class="close" onClick={this.closeClick} style={close}>&times;</span>
            <div>
            <img src={this.props.pic1} style={{float: "left", height: 350, width: 260, margin: 0, objectFit : "cover"}}></img>
            </div>
            <div style={{overflow: "auto", height: 320, marginTop: 8}}>
            <h3 style={{fontSize: 30, paddingLeft: "3%"}}>{this.props.name}</h3>
            <p style={{paddingLeft: "3%", fontStyle: "italic"}}>{this.props.titleName}</p>

            <p style={{fontSize: 15, paddingLeft: "3%", marginBottom: 35}}>{this.props.bio}</p>
            
            <h3 style={{paddingLeft: "3%"}}>{this.props.sect1titl}</h3>
            <p style={{fontSize: 15, paddingLeft: "3%", marginBottom: 35}}>{this.props.sect1desc}</p>
            <h3 style={{paddingLeft: "3%"}}>{this.props.sect2titl}</h3>
            <p style={{fontSize: 15, paddingLeft: "3%"}}>{this.props.sect2desc}</p>
            <h3 style={{paddingLeft: "3%"}}>{this.props.sect3titl}</h3>
            <p style={{fontSize: 15, paddingLeft: "3%", marginBottom: 35}}>{this.props.sect3desc}</p>
            <h3 style={{paddingLeft: "3%"}}>{this.props.sect4titl}</h3>
            <p style={{fontSize: 15, paddingLeft: "3%", marginBottom: 35}}>{this.props.sect4desc}</p>
            <h3 style={{paddingLeft: "3%"}}>{this.props.sect5titl}</h3>
            <p style={{fontSize: 15, paddingLeft: "3%", marginBottom: 35}}>{this.props.sect5desc}</p>
            </div>
           </div>
          </div>
          </div>
          </div>  
        );
    }

}



export default Popup;

