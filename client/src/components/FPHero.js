import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import Socialmedia from "./Socialmedia";
import * as links from './Link';

const items = [
  {
    src: require("../assets/img/carousel/1to1-img1.webp").default,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/carousel/1to1-img2.webp").default,
    altText: "",
    caption: "",
    header: ""
  }, {
    src: require("../assets/img/carousel/1to1-img3.webp").default,
    altText: "",
    caption: "",
    header: ""
  },
  // {
  //   src: require("../assets/img/theme/img-1-1200x1000.jpg").default,
  //   altText: "",
  //   caption: "",
  //   header: ""
  // },
  // {
  //   src: require("../assets/img/theme/img-2-1200x1000.jpg").default,
  //   altText: "",
  //   caption: "",
  //   header: ""
  // }
];
class FPHero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-dark">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("../../assets/img/Picture1.png").default}
                      style={{ width: "200px" }}
                    /> */}
                    <p className="display-4 mb-0" style={{color:"#ffcfbe"}}>
                      Enhanced learning experience through personalized teaching
                    </p>
                    <p className="display-3" style={{ color: "#f9423a" }}>
                      Learn to Lead, <br />Learn to Succeed
                    </p>
                    <p className="display-4">
                    <Socialmedia  />
                    </p>

                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-outline-warning mb-3 mb-sm-0"                        
                        href=""
                        size="lg"
                      >
                        <Link to={links.studform} tag={Link}> <span className="btn-inner--text">Book A <b> Free</b> Demo Lecture</span> </Link>
                      </Button>{" "}
                      {/* <Button
                        className="btn-outline-warning mb-3 mb-sm-0"                        
                        href=""
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--text">
                         Doubt Clearing Membership
                        </span>
                      </Button> */}
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        * 
                      </small>
                    </div>
                  </Col>
                  <Col className="mb-lg-auto" lg="6">
                    <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                      <UncontrolledCarousel items={items} />
                    </div>
                  </Col>

                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default FPHero;
