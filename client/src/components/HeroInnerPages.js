import React from 'react'
import {Container,Row,Col} from "reactstrap";


export default function HeroInnerPages(props) {
    return (
        <div>
                        <section className="section section-lg section-shaped " >
                <div className="shape shape-style-u1 shape-dark">
                    <span className="span-75" />
                    <span className="span-150" />
                    <span className="span-50" />
                    <span className="span-75" />
                    <span className="span-200" />
                    <span className="span-75" />
                    <span className="span-50" />
                    <span className="span-100" />
                    <span className="span-50" />
                    <span className="span-100" />
                </div>
                <Container className="shape-container d-flex align-items-center py-lg">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="10">
                                <p className="display-2 mb-0" style={{ color: "#ffcfbe", textTransform:"uppercase" }}>
                                    {props.heading}
                                </p>
                                <p className="display-4" style={{ color: "#f9423a" }}>
                                    {props.textdetail}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}
