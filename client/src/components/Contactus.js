import React from 'react'
import Navbar1 from "./Navbar1";
import HeroInnerPages from './HeroInnerPages';
import { Container, Row, Card, Col } from 'reactstrap';
import ContactusFormFields from './ContactusFormFields'
import { Button } from 'reactstrap';
import * as contactdetail from './Constants'
import Footer from './Footer';

export default function Contactus() {
    return (
        <div>
            <Navbar1 />
            <HeroInnerPages
                heading='Contact Us'
                textdetail=''
            />
            <section className="section pb-0 section-components ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.477979045869!2d73.77972822830178!3d18.602443284488764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9041e070d73%3A0xb7c8d5d2caad85aa!2sRahatani%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622193769299!5m2!1sen!2sin" title="Our Location" width="100%" height="350"loading="lazy" ></iframe>
                <Container>
                    <section className="section pb-0 section-components ">
                        <Container className="mb-5">
                            <Card className="card-profile shadow mt-150 "  >
                                <Row className="m-2 mb-5 p-1 ">
                                    <Col lg="12" sm="12" className="card-new-css" style={{ filter: "hue-rotate(30deg)" }}>
                                        <h2 className="text-white text-center font-weight-bold p-4" >CONTACT US</h2>
                                    </Col>
                                    <Col lg="3" sm="12" className='pt-5'>
                                        <Button className="btn-icon-only btn-lg rounded-circle float-left" color="instagram" >
                                            <span className="btn-inner--icon"><i className="fa fa-map-marker" /></span>
                                        </Button>
                                        <div style={{ marginLeft: "75px" }}>
                                            <h5> <b> Location: </b> </h5>
                                            <p >Rahatani , Pune</p>
                                        </div>
                                        <Button className="btn-icon-only btn-lg rounded-circle float-left" color="instagram" href={`mailto:${contactdetail.emailid}`}>
                                            <span className="btn-inner--icon"><i className="fa fa-envelope" /></span>
                                        </Button>
                                        <div style={{ marginLeft: "75px" }}>
                                            <h5> <b> Email: </b> </h5>
                                            <p> <a href={`mailto:${contactdetail.emailid}`}>{contactdetail.emailid}</a> </p>
                                        </div>
                                        <Button className="btn-icon-only btn-lg rounded-circle float-left" color="instagram" href={`mailto:${contactdetail.contactno}`}>
                                            <span className="btn-inner--icon"><i className="fa fa-phone-square" /></span>
                                        </Button>
                                        <div style={{ marginLeft: "75px" }}>
                                            <h5> <b> 
                                                Mobile Number: </b> </h5>
                                            <p ><a href={`tel:${contactdetail.contactno}`}> {contactdetail.contactno}</a></p>
                                        </div>
                                    </Col>

                                    <Col lg="9" sm="12"  >
                                        <div className="py-5">
                                            <ContactusFormFields />
                                        </div>
                                    </Col>

                                </Row>
                            </Card>
                        </Container>
                    </section>
                </Container>
                <Footer />

            </section>

        </div>
    )
}
