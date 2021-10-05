
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
//import * as contactdetail from "../Constants"


class Navbar1 extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                <img
                  alt="..."
                  src={require("../assets/img/logo-t.png").default}

                /> 1to1Guru
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6" style={{ fontSize: "30px" }}>
                      <NavLink to="/" tag={Link}>
                        <img
                          alt="..."
                          src={require("../assets/img/logo-t.png").default}
                        /> 1to1Guru
                      </NavLink>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavLink to="/" tag={Link}>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Home</span>
                  </NavLink>
                  <NavLink to="/Students" tag={Link}>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Students Corner</span>
                  </NavLink>
                  <NavLink to="/Teachers" tag={Link}>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Teachers Corner</span>
                  </NavLink>
                  <NavLink to="/Aboutus" tag={Link}>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">About Us</span>
                  </NavLink>
                  <NavLink to="/Contactus" tag={Link}>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Contact Us</span>
                  </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {/* <Button
                    className="nav-link-icon"
                    href={`mailto:${contactdetail.emailid}`}
                    id="tooltip333589070"
                    target="_blank"
                  >
                    <i className="fa fa-envelope" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Email ID : {contactdetail.emailid}
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip333589070">
                    Email us @ {contactdetail.emailid}
                  </UncontrolledTooltip>

                  <Button
                    className="nav-link-icon"
                    href={`tel:+91-${contactdetail.contactno}`}
                    id="tooltip333589075"
                  >
                    <i className="fa fa-phone-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Mobile Number: {contactdetail.contactno}
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip333589075">
                    Call us @ {contactdetail.contactno}
                  </UncontrolledTooltip> */}
                
                 <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-instagram btn-icon"
                      color="default"
                      type="button"
                    >
                      <Link to="/Students" tag={Link}>
                      <span className="nav-link-inner--text ml-1" style={{color:"white"}}>
                        Book a Demo Lecture
                      </span> </Link>
                    </Button>
                  </NavItem>
                </Nav> 
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Navbar1;
