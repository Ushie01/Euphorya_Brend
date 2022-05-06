import React from 'react'

const Dropdown = () => {
  const style = {
     borderRadius:"none"
  }
  return (
    <main>
        <Dropdown style={style}>
        <button variant="Defualt"> Size </button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">UK 6</Dropdown.Item>
            <Dropdown.Item href="#/action-2">UK 8</Dropdown.Item>
            <Dropdown.Item href="#/action-3">UK 10</Dropdown.Item>
            <Dropdown.Item href="#/action-3">UK 12</Dropdown.Item>
            <Dropdown.Item href="#/action-3">UK 14</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </main>
  )
}

export default Dropdown
