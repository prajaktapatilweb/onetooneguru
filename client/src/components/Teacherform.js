import React from 'react';
import { Container, Row, Col, Card } from "reactstrap";
import Navbar1 from "./Navbar1";
import HeroInnerPages from './HeroInnerPages';
import TeacherFormFields from './TeacherFormFields';

export default function Teacherform() {
    return (
        <>
            <Navbar1 />
            <HeroInnerPages 
                heading='Teacher Registration Form'
                textdetail='If you are interested in teaching through our online platform, please enroll yourself and our team will schedule meeting with you for further processing.'
            />
            <section className="section pb-0 section-components">
                <Container className="mb-5">
                    <Card className="card-profile shadow mt--150">
                        {/* Inputs */}
                        <Row className="m-2 mb-5 py-5 pt-lg-8">
                            <Col lg="1" sm="1"></Col>
                            <Col lg="10" sm="10">
                                {/* <h3 className="h4 text-success font-weight-bold mb-4 mt-5"></h3> */}
                                <TeacherFormFields />
                            </Col>
                        </Row>

                    </Card>
                </Container>

            </section>
        </>



    )
}
