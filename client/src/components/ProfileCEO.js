import React from "react";
import { Button, Card, Container, Row, Col } from "reactstrap";
import * as contactdetail from './Constants'

class ProfileCEO extends React.Component {
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
          </section>
          <section className="section">
            <Container >
              <Card className="card-profile shadow" >
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../src/assets/img/Mubarak-Mujawar.jpeg").default}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href={`tel:+91-${contactdetail.ceocontactno}`}
                          size="sm"
                        >
                          Contact
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href={`mailto:${contactdetail.ceoemailid}`}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-lg-6">
                    <h3>
                    Dr. Mubarak A Mujawar{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h5 font-weight-500">
                      <i className="ni location_pin mr-2 " />
                      CEO, 1to1Guru
                    </div>
                    <div className="h5 mt-3">
                      <i className="ni business_briefcase-24 mr-2" />
                      PhD, Dublin City university, Dublin, Ireland
                    </div>
                    <div className="h5">
                      <i className="ni  education_hat mr-2" />
                      Former Professor, Florida International University, Miami, USA
                    </div>
                  </div>
                  <div className="mt-5 py-3 pb-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h4 className=" text-justify">
                        Dr. Mubarak Mujawar is an internationally recognized researcher and professor in Physics and Electrical Engineering. He has over 15 years of teaching experience at the top national and international universities. Dr. Mujawar believes in Guru-Shishya parampara and practices the philosophy of experiential learning for creating active and collaborative learning environments for student success.
                        </h4>

                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default ProfileCEO;
