import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
//import { Row, Col } from 'reactstrap'

function RadioButtons(props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label className="form-control" style={{border:"none", height:"auto"}}>{label}</label>
      <Field name={name}  >
        {({ field }) => {
            return options.map(option => {
            return (
            <React.Fragment key={option.key}>
                <input 
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                  className="ml-4" 
                  />
                <label className="form-control-label ml-2" style={{ fontSize: "16px", color: "black", paddingRight: "30px" }} htmlFor={option.value}>{option.text}</label>
            </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
