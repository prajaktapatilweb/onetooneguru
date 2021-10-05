import React, { Component } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import * as contactdetail from "./Constants";
import {Button} from "reactstrap";

export class Whatsapp extends Component {
  render() {
    return (
      <div>
        {/* return{" "} */}
        <FloatingWhatsApp
          phone={contactdetail.contactno}
          message="Hi"
          //position="left"
          size="50px"
          popupMessage="Welcome to 1to1Guru, We are providing personalized teaching to 8th to 12th students for all subjects"
          zIndex="10"
        />
        <div className="alwaysonTop" style={{right:"80px",bottom:"13px"}}>
          {/* <img src='' alt='Make a Call'/> */}
          <Button
            className="btn-lg btn-icon-only rounded-circle ml-1"
            color="success"
          >
            <span className="btn-inner--icon">
              <i className="fa fa-phone" />
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Whatsapp;
