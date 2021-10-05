import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
//import { ReactstrapSelect } from "reactstrap-formik";

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='textOnInput mb-4'>
      <label htmlFor={name}>{label}</label>
      <Field className='form-control' as='select' id={name} name={name}  {...rest} >
        {options.map(option => {
          return (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          )
        })} 
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select
