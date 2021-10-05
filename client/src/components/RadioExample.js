import React from 'react';
import { Radio, RadioGroup,Stack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react"

export default function RadioExample() {
    const [value, setValue] = React.useState("1")
    return  (
     <React.Fragment>
      <RadioGroup defaultValue="2">
      <Stack spacing={5} direction="row">
        <Radio colorScheme="red" value="1">
          Radio
        </Radio>
        <Radio colorScheme="green" value="2">
          Radio
        </Radio>
      </Stack>
    </RadioGroup>

    <Select placeholder="Select option">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
  </React.Fragment>
    )
  }

  