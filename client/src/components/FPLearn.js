import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
//import bg from "../assets/img/blackboard.jpg";
import E1li from "./E1li";
import FPStudentFormFields from "./FPStudentFormFields";

export default function FPLearn() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-sm-2 order-lg-1" lg="6">
              <div className="pr-md-5">
                <h2>Make learning your habit with 1to1Guru</h2>
                <ul className="list-unstyled mt-1">
                  <E1li text1="" texth="Verified and trusted teachers" text2="provide personalised learning experience"/>
                  <E1li text1="The" texth="best use of technology" text2="for personlised learning"/>
                  <E1li text1="Students learn at their" texth="own pace, convenience, time and speed" text2=""/>
                  <E1li text1="Students' progress" texth="progress" text2="is closely monitored"/>
                  <E1li text1="Our teachers interact with parents on regular basis to " texth="enhance students' success" text2=""/>
                </ul>
              </div>
            </Col>
            <Col className="order-sm-2 order-lg-1" lg="6" sm="12">
              <Card className="card-profile shadow px-5 pb-5 pt-3">
              <h2 className="py-2" >Book A <span className="text-red"> FREE </span>Demo Lecture </h2>
                <FPStudentFormFields />
              </Card>
            </Col>
          </Row>
 
        </Container>
      </section>
    </>
  );
}
