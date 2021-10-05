import React from 'react'
import {Button,Col} from 'reactstrap'

export default function Servicesbutton(props) {
    return (
        <>
        <Col lg="4" className="py-3">
            <Button
                className={`btn-icon btn-3 ml-1 bg-gradient-${props.color}`}
                type="button"
                size="lg"
                style={{width:"100%", height:"70px"}}
            >
                <span className={`btn-inner--icon mr-1 text-${props.tcolor}`}>
                <i className={`ni ni-${props.iconname}`} />
                </span>
                <span className={`btn-inner--text text-${props.tcolor}`} style={{fontSize:"16px"}}>{props.servicename} </span>
            </Button>
            </Col>
        </>
    )
}

