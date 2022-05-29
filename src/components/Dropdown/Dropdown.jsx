import React, { useState } from 'react'
import './Dropdown.css'


function Dropdown({size, setSize, error, onChange}) {
  const [isActive, setIsActive] = useState(false);
  const options = [6, 7, 8, 9, 10];

  
  return (
    <div>
      <div className='dropdown drowdow'>
        <div className='dropdown-btn dropbtn-click' onClick={(e) => setIsActive(!isActive)}>
          {size}
          <span className='fas fa-caret-down'></span>
        </div>
        {!isActive && (
          <div className='dropdown-content'>
            {options.map((option, i) => (
              <div key={i}>
                <div onClick={(e) => {
                  setSize(option)
                  setIsActive(false)
                }}
                  className="dropdown-item">{option}</div>
              </div>
            ))}
          </div>
        )}
      </div>


      {/* <div className="dropdow">
        <div className="dropbtn-click" onClick={(e) => setIsActive(!isActive)} >{selected}<span className='fas fa-caret-down'></span></div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option, i) => (
              <div
                className="dropdown-item"
                key={i}
                onChange={onChange}
                type="number"
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false)
                }}
                >
                {option}
              </div>
             
            ))}
          </div>
        )}
        </div>
         {error && <div className='alert alert-danger'>{error}</div>} */}

    </div>
  );
}

export default Dropdown
