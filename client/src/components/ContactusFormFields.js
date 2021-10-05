import React, { useState } from 'react'
import { Formik, Form } from 'formik'
//import FormikControl from './FormComponents/FormikControl'
import Input from './FormComponents/Input'
//import Select from './FormComponents/Select';
//import Checkboxgroup from './FormComponents/CheckboxGroup';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";
//import { dropdownClass, subjectList, checkboxExams, studentFacility } from './FormComponents/FormConstants';
import Axios from "axios";
import * as Yup from 'yup';
//import ReCAPTCHA from "react-google-recaptcha";
import Textarea from './FormComponents/Textarea'
// import FormSubmitModals from '../components/FormSubmitModals';
// import { Checkbox } from '@chakra-ui/checkbox';
//import Trial from './Trial';

function TeacherFormFields() {
    const initialValues = {
        name: '',
        mobileno: '',
        email: '',
        subject: '',
        message: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Please enter valid email number').required('Required'),
        mobileno: Yup.number().min(1000000000, "Please enter only 10 digit number").max(9999999999, "Please enter only 10 digit number").required('Required'),
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required')
    })
    //Modal variables
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // function googleRecaptcha(value1) {
    //     console.log("Captcha value:", value1)
    // }
    //       With the following TEST keys for local host, you will always get No CAPTCHA and all verification requests will pass.
    // Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    // Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
    // The reCAPTCHA widget will show a warning message to claim that it's only for testing purpose. Please do not use these keys for your production traffic.

    const onSubmit = (values, submitProps, actions) => {
        // console.log('CAptche', captchcode);
        console.log('Form data', values)
        Axios.post("http://localhost:3001/contactus", {
            name: values.name,
            email: values.email,
            mobileno: values.mobileno,
            subject: values.subject,
            message: values.message,
        })
            .then(function (response) {
                //handle success
                alert('Thank you');
                setModal(true)
                submitProps.setSubmitting(false);
                submitProps.resetForm();
            })
            .catch(function (response) {
                //handle error
                alert("Error in submission. Please resubmit");
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    return (
                        <Form>
                            {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
                            <Input
                                type='text'
                                label='Student Name'
                                name='name'
                                placeholder='Enter Your Name'
                            />
                            <Input
                                type='number'
                                label='Mobile Number'
                                name='mobileno'
                                placeholder="Enter your 10 digit Mobile Number"
                            />
                            <Input
                                type='text'
                                label='Email '
                                name='email'
                                placeholder="Enter email id"
                            />
                            <Input
                                type='text'
                                label='Subject'
                                name='subject'
                                placeholder="Enter subject"
                            />
                            <Textarea
                                type='text'
                                label='Message'
                                name='message'
                            />
                            {/* <div className="form-control label" style={{ border: "none", height: "auto" }}>Select the Class / Grade you are studying.
                            </div> */}
                            {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
                            <div className="text-center">
                                <button type='reset' className="btn btn-warning"> Reset</button>
                                <button type='submit' className="btn btn-success" >Submit</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            {/* <FormSubmitModals /> */}
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered modal-info"
            >
                <ModalHeader toggle={toggle}>Form Submission</ModalHeader>
                <ModalBody>
                    Thank you for your submission
                </ModalBody>
                <ModalFooter>
                    <Button color="white" onClick={toggle}>OK</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default TeacherFormFields
