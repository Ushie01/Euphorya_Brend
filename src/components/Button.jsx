import { style } from '@mui/system'
import React from 'react'

const btnColor = {
  borderRadius: "none",
  width: "100px"
}

function Button() {
  return (
    <div>
      <button style={btnColor} variant="dark">Add To Cart</button>
    </div>
  )
}

export default Button
