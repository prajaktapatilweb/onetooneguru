import React from "react";
import ReactPlayer from "react-player/youtube";
import { Row, Col } from "reactstrap";

export default function FPVideo() {
  return (
    <div>
              <section className="section section-lg section-shaped ">
      <Row>
        <Col lg="2" sm="1">
          {" "}
        </Col>
        <Col className="py-5" lg="8" sm="10">
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/watch?v=1BPZNcmFi6I"
          />
        </Col>
      </Row>
      </section>
    </div>
  );
}
