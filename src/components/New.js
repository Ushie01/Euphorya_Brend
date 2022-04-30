import './New.css'
import { useState } from 'react'
import Button from './Button'
import React, { Fragment } from 'react'

const New = (props) => {
  const [count, setState] = useState(0);
  const [name, setName] = useState("");
  return (
  <Fragment>
    <input type="text" onChange={e => setName(e.target.value)} />
    <div>
        {name} has clicked {count} times!
    </div>   
      <button onClick={() => setState(count + 1)}>Increase</button>
  </Fragment>
  )
}

export default New


