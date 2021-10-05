import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import FormikControl from './FormComponents/FormikControl'
import Input from './FormComponents/Input'
import Select from './FormComponents/Select';

import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { dropdownPrefix, dropdownAboutus, dropdownHClass, checkboxSubjects, checkboxExamsList, radioYN1, radioYN2 } from './FormComponents/FormConstants';
import Axios from "axios";
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
//  import FormSubmitModals from '../components/FormSubmitModals';
//  import FormSubmitModalsFunction from '../components/FormSubmitModalFunction';
//import Trial from './Trial';

function TeacherFormFields() {
    const initialValues = {
        title: 'Mr.',
        name: 'Bhushan',
        email: 'amol@1to1guru.com',
        mobileno: 9823217224,
        city: 'Pune',
        pincode: 411004,
        eduqual: 'phd',
        onteachexp: '2',
        offteachexp: '10',
        higherclass: '',
        subjects: ['Physics'],
        examinations: [],
        aboutus: 'Whatsapp',
        laptop: 'LaptopNo',
        broadband: 'BroadbandNo',
    }
    // const [show, setShow] = useState('');
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        email: Yup.string().email("Please enter Valid email ID").required('Required'),
        mobileno: Yup.number().min(1000000000, "Please enter only 10 digit number").max(9999999999, "Please enter only 10 digit number").required('Required'),
        city: Yup.string().required('Required'),
        pincode: Yup.number().min(100000, "Please enter 6 digit Pincode").max(999999, "Please enter 6 digit Pincode").required('Required'),
        eduqual: Yup.string().required('Required'),
        onteachexp: Yup.number().min(0, "Please enter valid experience").max(40, "Please enter valid experience").required('Required'),
        offteachexp: Yup.number().min(0, "Please enter valid experience").max(40, "Please enter valid experience").required('Required'),
        higherclass: Yup.string().required('Required'),
        subjects: Yup.array().min(1, 'Please select at least one subject').required('Required'),
        //examinations: Yup.array().required('Required'),
        aboutus: Yup.string().required('Required'),
        laptop: Yup.string().required('Required'),
        broadband: Yup.string().required('Required')
        // subjects: Yup.object().shape({
        //     key: Yup.string(),
        //     value: Yup.string().required("Subject/s is required!")
        // }),
    })
    //Modal variables
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // const handleDropdown =(e) => {
    //     alert("Changed");
    // }
    function googleRecaptcha(value1) {
        console.log("Captcha value:", value1)
    }
    //       With the following TEST keys for local host, you will always get No CAPTCHA and all verification requests will pass.
    // Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    // Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
    // The reCAPTCHA widget will show a warning message to claim that it's only for testing purpose. Please do not use these keys for your production traffic.

    const onSubmit = (values, submitProps, actions) => {
        // console.log('CAptche', captchcode);
        console.log('Form data', values)
        Axios.post("/registerteacher", {
            name: `${values.title} ${values.name}`,
            email: values.email,
            mobileno: values.mobileno,
            city: values.city,
            pincode: values.pincode,
            eduqual: values.eduqual,
            onteachexp: values.onteachexp,
            offteachexp: values.offteachexp,
            higherclass: values.higherclass,
            subjects: values.subjects.join(),
            examinations: values.examinations.join(),
            aboutus: values.aboutus,
            laptop: values.laptop,
            broadband: values.broadband
        })
            .then(function (response) {
                //handle success
                // alert('Thank you');
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
                            <Row>
                                <Col lg="3" sm="3" >
                                    <Select
                                        type='select'
                                        label='Title'
                                        name='title'
                                        options={dropdownPrefix}
                                    />
                                </Col>
                                <Col lg="9" sm="9" >
                                    <Input
                                        type='text'
                                        label='Name'
                                        name='name'
                                        placeholder='Enter Your Name'
                                    />
                                </Col>
                            </Row>
                            <FormikControl
                                control='input'
                                type='text'
                                label='Email ID'
                                name='email'
                                placeholder="Enter Your Email ID"
                            />
                            <FormikControl
                                control='input'
                                type='number'
                                label='Mobile Number'
                                name='mobileno'
                                placeholder="Enter your 10 digit Mobile Number"
                            />
                            <FormikControl
                                control='input'
                                type='text'
                                label='City of current Location'
                                name='city'
                                placeholder="Please enter the city where you are currently located"
                            />
                            <FormikControl
                                control='input'
                                type='number'
                                label='Pincode'
                                name='pincode'
                                placeholder="Enter the pincode of current currently located city"
                            />
                            <FormikControl
                                control='input'
                                type='text'
                                label='Educational Qualification'
                                name='eduqual'
                                placeholder="Enter the educational qualification"
                            />
                            <Row>
                                <Col lg="6" sm="12" >
                                    <FormikControl
                                        control='input'
                                        type='number'
                                        label='Online Teaching Experience'
                                        name='onteachexp'
                                        placeholder="Enter expeience in years only"
                                    />
                                </Col>
                                <Col lg="6" sm="12" >
                                    <FormikControl
                                        control='input'
                                        type='number'
                                        label='OFFline Teaching Experience'
                                        name='offteachexp'
                                        placeholder='Enter expeience in years only'
                                    />
                                </Col>
                            </Row>
                            <div className="form-control label" style={{ border: "none", height: "auto" }}>Select the highest Class / Grade you can teach.
                            </div>
                            <FormikControl
                                control='select'
                                type='select'
                                name='higherclass'
                                options={dropdownHClass}
                                onChange={(e) => {
                                    if (formik.values.subjects.length !== 0) {
                                        alert('You are changing the higest class of teaching so the subjects selected earlier will be cleared');
                                        formik.values.subjects = [];
                                    }
                                    formik.handleChange(e);
                                }}
                            />
                            {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
                            <FormikControl
                                control='checkbox'
                                label='Which Subject can you teach ? (Your can select atleast one and more than one Subject)'
                                name='subjects'
                                options={checkboxSubjects[formik.values.higherclass]}
                            />
                            <FormikControl
                                control='checkbox'
                                label='Select the competative exam which you will be available to teach (Optional)'
                                name='examinations'
                                options={checkboxExamsList}
                            />
                            <div className="form-control label" style={{ border: "none", height: "auto" }}>How did you hear about us?
                            </div>
                            <FormikControl
                                control='select'
                                type='select'
                                label=''
                                name='aboutus'
                                options={dropdownAboutus}
                            />
                            <FormikControl
                                control='radio'
                                label='Do you have access to laptop/desktop ?'
                                name='laptop'
                                options={radioYN1}
                            />
                            <FormikControl
                                control='radio'
                                label='Do you have sufficient bandwidth to conduct online lectures ?'
                                name='broadband'
                                options={radioYN2}
                            />
                            <ReCAPTCHA sitekey="6LdVV38cAAAAAHPP-zQuWKWjLaRNIA5-BQYuf3mg" onChange={googleRecaptcha} />
                            <div className="text-center">
                                <button type='reset' className="btn btn-warning"> Reset</button>
                                <button type='submit' className="btn btn-success" >Submit</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            {/* <FormSubmitModalsFunction /> */}
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
