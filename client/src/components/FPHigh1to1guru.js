import React from "react";
import {
  Container,
  CardBody,
  Row,
  Col,
  //    Button,
  Card,
} from "reactstrap";
//import { Link } from "react-router-dom";

export default function FPHigh1to1guru() {
  return (
    <>
      <section className="section section-lg section-shaped ">
        <div className="shape shape-style-u1 shape-dark">
          <span className="span-150" />
          <span className="span-50" />
          <span className="span-50" />
          <span className="span-75" />
          <span className="span-200" />
          <span className="span-75" />
          <span className="span-50" />
          <span className="span-100" />
          <span className="span-50" />
          <span className="span-100" />
        </div>
        <Container className="pt-50 pb-50 ">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-red">
                Highlights of 1-to-1 Learning
              </h2>
              <p className="lead text-white">
                One to One teaching offers personalised learning experience for
                better understanding of the subject by eliminating crowded
                class.{" "}
              </p>
              <p className="lead text-white">
                Our 1-to-1 leaning platform opens the door for best teachers
                across the globe to reach at your end. It is a tool which helps
                our students to manage and save their time.
              </p>
            </Col>
          </Row>
          <Row className="row-grid mt-5">
            <Col lg="4">
              <Card className="card-lift--hover shadow border-1 ">
                <CardBody className="py-5">
                  <div className="icon mb-2">
                    <i className="ni ni-bullet-list-67 text-danger" />
                  </div>
                  <h6 className="text-green text-uppercase">
                    <strong> Conceptual learning</strong>
                  </h6>
                  <p className="lead text-justify text-blue ">
                    Counselling and Mentoring of student in peaceful
                    environment, which helpful to excel and understand the
                    concept of each subject to expand their horizon.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-lift--hover shadow border-1 ">
                <CardBody className="py-5">
                  <div className="icon mb-2">
                    <i className="ni ni-check-bold text-danger" />
                  </div>
                  <h6 className="text-green text-uppercase">
                    <strong> Correctly monitored</strong>
                  </h6>
                  <p className="lead text-justify text-blue ">
                    One to one teaching helps the teacher to guide and monitor
                    students' progress by concentrating on a single student.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="4">
              <Card className="card-lift--hover shadow border-1">
                <CardBody className="py-5">
                  <div className="icon mb-2">
                    <i className="ni ni-atom text-danger" />
                  </div>
                  <h6 className="text-green text-uppercase">
                    <strong> More Attentive</strong>
                  </h6>
                  <p className="lead text-justify text-blue ">
                    It will help the student to ask a question without a fear
                    and more attention on students' core strengths.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <div className="text-center py-4">
                        <Button className="btn-1 ml-1 " color="success" type="button" ><Link to='/Aboutus'> Learn More </Link> </Button>
                    </div> */}
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
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}
