import React, { useState } from 'react'
// nodejs library that concatenates classes
//import classnames from "classnames";
// reactstrap components
import {
    Button,
    Modal,
    Row,
    Col
} from "reactstrap";

export default function FormSubmitModalFunction() {

    // // //console.log("Captcha value:", Show)
    // // const [Show,setShow] = useState();
    // // const showModal =()=>setShow(false);
    // // const handleClose = () => setShow(false);
    // // //const toggleModal = state => { setstate(!state) };
    // const [show, setShow] = useState(true);

    // const handleClose = () => setShow(false);

    //const ModalExample = (props) => {
        // const {
        //     buttonLabel,
        //     className
        // } = props;

        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);

            return (
                <>

                    <h3 className="h4 text-success font-weight-bold mb-4">Modals</h3>
                    <Row>
                        <Col md="4">
                            <Button
                                block
                                className="mb-3"
                                color="warning"
                                type="button"
                                onClick={toggle}
                            >
                                Notification
                            </Button>
                            <Modal
                                className="modal-dialog-centered modal-danger"
                                contentClassName="bg-gradient-danger"
                                isOpen={modal}
                                 toggle={toggle}
                            >
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-title-notification">
                                        Your attention is required

                                    </h6>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={toggle}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="py-3 text-center">
                                        <i className="ni ni-bell-55 ni-3x" />
                                        <h4 className="heading mt-4">You should read this!</h4>
                                        <p>
                                            A small river named Duden flows by their place and supplies
                                            it with the necessary regelialia.
                                        </p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Button className="btn-white" color="default" type="button">
                                        Ok, Got it
                                    </Button>
                                    <Button
                                        className="text-white ml-auto"
                                        color="link"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={toggle}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </>
            );
        // }
        // return (
        //     <div>
        //         <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        //         <Modal isOpen={modal} toggle={toggle} className={className}>
        //             <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        //             <ModalBody>
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //             </ModalBody>
        //             <ModalFooter>
        //                 <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        //                 <Button color="secondary" onClick={toggle}>Cancel</Button>
        //             </ModalFooter>
        //         </Modal>
        //     </div>
        // );
    }
