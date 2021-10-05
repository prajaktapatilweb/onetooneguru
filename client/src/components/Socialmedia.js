import React from 'react'
import { Button, UncontrolledTooltip } from "reactstrap";

export default function Socialmedia(props) {
    return (
        <>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://www.facebook.com/1to1guru"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
              Like us on Facebook 
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="instagram"
                href="https://www.instagram.com/1to1guru"
                id="tooltip829810202"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
              Follow us on Instagram
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://www.linkedin.com/company/1to1-guru/"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-linkedin" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Join with us in Linkedin
              </UncontrolledTooltip>
        </>
    )
}

