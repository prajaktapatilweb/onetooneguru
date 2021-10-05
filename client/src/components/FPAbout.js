import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import * as links from './Link';

export default function FPAbout() {
  return (
    <div>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="10">
              <h2 className="display-3">About Us</h2>
              <p className="lead text-justify">
                1to1Guru, a subsidiary of AeduZEST Innovations Private Limited,
                is a venture by like-minded educationalists committed to
                enhancing the student's personalised learning process by
                adapting the well-researched and proven educational practices.
                1to1Guru team is backed by leading scientists, educationalists,
                professors, technocrats in India and Abroad. Our dedicated team
                of experienced education professionals strives to prepare our
                students for future demanding roles in Science, Technology,
                Arts, and Commerce by stimulating their fullest potential. We
                believe in igniting our students' voice by providing the
                confidence to express their ideas and opinions by one-to-one
                teaching, so they are heard and taken into account in any
                situation.
              </p>
              <div className="btn-wrapper">
                <Button className="mb-3 mb-sm-0" color="primary">
                  <Link to={links.aboutus} tag={Link}>
                    <span
                      className="nav-link-inner--text ml-1"
                      style={{ color: "white" }}
                    >
                      Learn More
                    </span>{" "}
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
