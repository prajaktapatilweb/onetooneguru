import React, { useState } from "react";
import { Formik, Form } from "formik";
//import FormikControl from './FormComponents/FormikControl'
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import Checkboxgroup from "./FormComponents/CheckboxGroup";
//import Toast from "react-bootstrap/Toast";
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Row,
  Col,
} from "reactstrap";
import {
  dropdownClass,
  studsubjectList,
  checkboxExams,
} from "./FormComponents/FormConstants";
import Axios from "axios";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
// import FormSubmitModals from '../components/FormSubmitModals';
// import { Checkbox } from '@chakra-ui/checkbox';
//import Trial from './Trial';

function FPStudentFormFields() {
  const initialValues = {
    name: "",
    mobileno: "",
    city: "",
    services: ["Free demo lecture"],
    grade: "",
    subjects: [],
    examinations: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    mobileno: Yup.number()
      .min(1000000000, "Please enter only 10 digit number")
      .max(9999999999, "Please enter only 10 digit number")
      .required("Required"),
    city: Yup.string().required("Required"),
    //services: Yup.array().min(1, 'Please select at least select one service').required('Required'),
    grade: Yup.string().required("Required"),
    subjects: Yup.array()
      .min(1, "Please select at least select one sibject")
      .required("Required"),
    //examinations: Yup.array().required('Required'),
  });
  //Modal variables
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

//   const notify = () =>
//    toast.success("Thank you We will contact you!");
   //, {
      //position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,    }
    
  //       With the following TEST keys for local host, you will always get No CAPTCHA and all verification requests will pass.
  // Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
  // Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
  // The reCAPTCHA widget will show a warning message to claim that it's only for testing purpose. Please do not use these keys for your production traffic.

  const onSubmit = (values, submitProps, actions) => {
    // console.log('CAptche', captchcode);
    console.log("Form data", values);
    Axios.post("/enrollstudent", {
      name: values.name,
      mobileno: values.mobileno,
      city: values.city,
      grade: values.grade,
      subjects: values.subjects.join(),
      examinations: values.examinations.join(),
      services: values.services.join(),
    })
      .then(function (response) {
        //handle success
      
        setModal(true)
        //notify();
        //return( <ToastContainer />);
        //alert("Thank you");
        //return(<Trial2 />)
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
        {(formik) => {
          return (
            <Form>
              {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
              <Row>
                <Col lg="6" sm="6">
                  <Input
                    type="text"
                    label="Student Name"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Input
                    type="number"
                    label="Mobile Number"
                    name="mobileno"
                    placeholder="Enter your 10 digit Mobile Number"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Input
                    type="text"
                    label="City of current Location"
                    name="city"
                    placeholder="Please enter the city where you are currently located"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Select
                    type="select"
                    name="grade"
                    label="Class/Grade"
                    options={dropdownClass}
                    onChange={(e) => {
                      if (formik.values.subjects.length !== 0) {
                        alert(
                          "You are changing the higest class of teaching so the subjects selected earlier will be cleared"
                        );
                        formik.values.subjects = [];
                      }
                      if (formik.values.examinations.length !== 0) {
                        alert(
                          "You are changing the higest class of teaching so the examinations selected earlier will be cleared"
                        );
                        formik.values.examinations = [];
                      }
                      formik.handleChange(e);
                      console.log(formik.values.grade);
                    }}
                  />
                </Col>
              </Row>

              {/* <div className="form-control label" style={{ border: "none", height: "auto" }}>Select the Class / Grade you are studying.
                            </div> */}

              {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
              <Checkboxgroup
                label="Select the Subject/s"
                name="subjects"
                options={studsubjectList[formik.values.grade]}
              />
              <Checkboxgroup
                label="Select the competative exam for which you are preparing"
                name="examinations"
                options={checkboxExams[formik.values.grade]}
              />
              {/* <Checkboxgroup
                                label='I am interested in '
                                name='services'
                                options={studentFacility}
                            />
                            <ReCAPTCHA sitekey="6LdVV38cAAAAAHPP-zQuWKWjLaRNIA5-BQYuf3mg" onChange={googleRecaptcha} /> */}
              <div className="text-center">
                {/* <button type='reset' className="btn btn-warning"> Reset</button> */}
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </Form>
          );
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
  );
}

export default FPStudentFormFields;
