import React from "react";
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";
import * as contactdetail from "./Constants";
import Socialmedia from "./Socialmedia";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import  Whatsapp from "./Whatsapp";
import Trial2 from "./Trial2"


export default function Footer() {
  return (
    <div>
      <footer className=" footer bg-gradient-dark">
        <Container>
          <Whatsapp />
          <ScrollToTop />
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-danger font-weight-dark mb-2">1to1Guru</h3>
              <h4 className="text-neutral mb-0 font-weight-light">
                A Project of AEDUZEST INNOVATIONS PVT LTD, Pune-17
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper " lg="6">
              <Socialmedia />
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="pinterest"
                href={`mailto:${contactdetail.emailid}`}
                id="tooltip829810203"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-envelope" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810203">
                Email us @ : {contactdetail.emailid}
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="slack"
                href={`tel:+91-${contactdetail.contactno}`}
                id="tooltip829810232"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-phone-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810232">
                Call us @ {contactdetail.contactno}
              </UncontrolledTooltip>
            </Col>
          </Row>

          <Row className=" align-items-center text-neutral justify-content-md-between">
            <Col md="7">
              <div className=" copyright">
                © {new Date().getFullYear()} Content Copyright 1to1Guru. All
                Rights Reserved.
                <p>
                  {" "}
                  Designed by
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Creative Tim{" "}
                  </a>
                  &{" "}
                  <a
                    href="https://www.aeduzest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    AEDUZEST Web Services{" "}
                  </a>{" "}
                </p>
              </div>
            </Col>
            <Col md="5">
              <Nav className=" nav-footer  justify-content-end">
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    {" "}
                    Home{" "}
                  </NavLink>
                  <NavLink to="/Aboutus" tag={Link}>
                    {" "}
                    About Us{" "}
                  </NavLink>
                  <NavLink to="/Contactus" tag={Link}>
                    {" "}
                    Contact Us{" "}
                  </NavLink>
                  <NavLink to="/Termsofservice" tag={Link}>
                    {" "}
                    Terms of Service{" "}
                  </NavLink>
                  <NavLink to="/Privacypolicy" tag={Link}>
                    {" "}
                    Privacy Policy{" "}
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
