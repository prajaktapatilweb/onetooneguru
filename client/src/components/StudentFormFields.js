import React,{ useState } from 'react'
import { Formik, Form } from 'formik'
//import FormikControl from './FormComponents/FormikControl'
import Input from './FormComponents/Input'
import Select from './FormComponents/Select';
import Checkboxgroup from './FormComponents/CheckboxGroup';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";
import { dropdownClass, studsubjectList, checkboxExams, studentFacility } from './FormComponents/FormConstants';
import Axios from "axios";
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
// import FormSubmitModals from '../components/FormSubmitModals';
// import { Checkbox } from '@chakra-ui/checkbox';
//import Trial from './Trial';

function StudentFormFields() {
    const initialValues = {
        name: '',
        mobileno: '',
        city: '',
        services: [],
        grade: '',
        subjects: [],
        examinations: []
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        mobileno: Yup.number().min(1000000000, "Please enter only 10 digit number").max(9999999999, "Please enter only 10 digit number").required('Required'),
        city: Yup.string().required('Required'),
        services: Yup.array().min(1, 'Please select at least select one service').required('Required'),
        grade: Yup.string().required('Required'),
        subjects: Yup.array().min(1, 'Please select at least select one sibject').required('Required'),
        //examinations: Yup.array().required('Required'),
    })
    //Modal variables
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
        Axios.post("/enrollstudent", {
            name: values.name,
            mobileno: values.mobileno,
            city: values.city,
            grade: values.grade,
            subjects: values.subjects.join(),
            examinations: values.examinations.join(),
            services: values.services.join()
        })
            .then(function (response) {
                //handle success
                //alert('Thank you');
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
                                label='City of current Location'
                                name='city'
                                placeholder="Please enter the city where you are currently located"
                            />
                            {/* <div className="form-control label" style={{ border: "none", height: "auto" }}>Select the Class / Grade you are studying.
                            </div> */}
                            <Select
                                type='select'
                                name='grade'
                                label='Class/Grade'
                                options={dropdownClass}
                                onChange={(e) => {
                                    if (formik.values.subjects.length !== 0) {
                                        alert('You are changing the higest class of teaching so the subjects selected earlier will be cleared');
                                        formik.values.subjects = [];
                                    }
                                    if (formik.values.examinations.length !== 0) {
                                        alert('You are changing the higest class of teaching so the examinations selected earlier will be cleared');
                                        formik.values.examinations = [];
                                    }
                                    formik.handleChange(e);
                                }}
                            />
                            {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
                            <Checkboxgroup
                                label='Subject'
                                name='subjects'
                                options={studsubjectList[formik.values.grade]}
                            />
                            <Checkboxgroup
                                label='Select the competative exam for which you are preparing'
                                name='examinations'
                                options={checkboxExams[formik.values.grade]}
                            />
                            <Checkboxgroup
                                label='I am interested in '
                                name='services'
                                options={studentFacility}
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

export default StudentFormFields
