import { style } from '@mui/system'
import React from 'react'

const btnColor = {
  borderRadius: "none",
  width: "100px"
}

function Button() {
  return (
    <div>
          <Button style={btnColor} variant="dark">Add To Cart</Button>
    </div>
  )
}

export default Button
