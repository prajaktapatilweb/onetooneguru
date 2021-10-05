import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import {FormGroup} from 'reactstrap'

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='' >
      <label className="form-control" style={{border:"none", height:"auto"}}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
              <FormGroup check inline>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  className="ml-2 "
                />
                <label style={{ fontSize: "16px", color: "black", paddingLeft:"10px", marginLeft:"20px" }} htmlFor={option.value}>{option.text}</label> <br />
                </FormGroup>
                
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup
