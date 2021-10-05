import React from 'react'
import { Badge } from "reactstrap";

export default function E1li(props) {
    return (
        <div>
            <li className="py-2">
                <div className="d-flex align-items-center">
                     <div>
                        <Badge className="badge-circle mr-3" color="success">
                            <i className="fa fa-check" />
                        </Badge>
                    </div> 
                    <div>
                        <h5 className="mb-0" >
                        {props.text1}
                            <span className="text-teal"> {props.texth} </span>
                            {props.text2}
                        </h5>
                    </div>
                </div>
            </li>

        </div>
    )
}
