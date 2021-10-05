import React from 'react'
import { Container, Row } from 'reactstrap'
import Servicesbutton from './Servicesbutton'

export default function FPServices() {
    return (
        <div>
            <section className="section section-sm py-5">
                <Container>
                    <h2 className="display-3 text-center py-3">Our Services </h2>
                    <br />
                    <Row >
                        <Servicesbutton color="cyan" tcolor="black" servicename="Personalised Teaching" iconname="single-02" />
                        <Servicesbutton color="green" tcolor="black" servicename="Question Bank Solving" iconname="single-copy-04" />
                        <Servicesbutton color="teal" tcolor="white" servicename="Audio Video Content" iconname="camera-compact" />
                        <Servicesbutton color="blue" tcolor="white" servicename="Study Materials" iconname="collection" />
                        <Servicesbutton color="purple" tcolor="black" servicename="Experimental Teaching Approch" iconname="ruler-pencil" />
                        <Servicesbutton color="indigo" tcolor="white" servicename="Online test series" iconname="time-alarm" />
                        <Servicesbutton color="warning" tcolor="black" servicename="Counselling" iconname="satisfied" />
                        <Servicesbutton color="danger" tcolor="white" servicename="Competative examination preparation" iconname="ui-04" />
                        <Servicesbutton color="gray-dark" tcolor="white" servicename="Personalised Doubt Clearing Session" iconname="ui-04" />
                    </Row>
                    <br />
                    <br />
                </Container>
            </section>
        </div>
    )
}
