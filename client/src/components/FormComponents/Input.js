import React from 'react'
import { Field } from 'formik'
// import TextError from './TextError'
import { ReactstrapInput } from "reactstrap-formik";

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='textOnInput mb-4'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} component={ReactstrapInput}/>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  )
}

export default Input
