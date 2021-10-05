import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import * as links from './Link';


export default function FPTeachers() {
    return (
        <div>
            <section className="section section-lg1 ">
                <Container style={{ opacity: 0.7 }}>
                    <h2 className="display-3 text-center py-3 text-white">
                        Join Us
                    </h2>
                    <Row className="row-grid justify-content-center">
                        <Col className="text-center" lg="10" >
                            <Card className="shadow-lg ">
                                <CardHeader className="bg-gradient-success" >
                                    <h3 className="display-4 ">
                                        We are Hiring Qualified and Experienced Teachers
                                    </h3>
                                </CardHeader>
                                <CardBody className="h4 py-5">
                                    <li> Work at your convenience / flexible timing </li>
                                    <li> Respect your experience and knowledge </li>
                                    <li> Expanding towards your horizon</li>
                                    <li> Healthy work environment</li>
                                    <br></br>
                                        <Button
                                            color="info"
                                            type="button"
                                            className="align-content-center"
                                        >
                                            <Link to={links.teachform} tag={Link}> <h5 style={{marginBottom:"0rem"}}> <strong> Join Our Team </strong></h5> </Link>
                                        </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
