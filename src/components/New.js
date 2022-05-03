import React from 'react'
import './New.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputSlider from './InputSlider';
import Button from './Button';


// Slider.oninput = () =>  {
//     output.innerHTML = "Price: #2,000.00 - #" + this.defaultValue + ".00";
// }

function New() {
  return (
    <div>
      <div className="container">
  <div className="row in-new">
    <div className="row1">
      <div className="container ner">
        <p id="Search">Search</p>
        <form action="">
          <div className="form-row">
            <input type="text" id="name" placeholder="Submit.." />
            <label className="label"><i className="fa fa-search far"></i></label>
          </div>
        </form>
        <p id="price">Price</p>

        <p id="Categories">Categories</p>
        <p className="pge" href="#">Accessories</p>
        <p className="pge" href="#">Euphurya</p>
        <p className="pge" href="#">Furh</p>
        <p className="pge" href="#">Ecstasy</p>
        <p className="pge" href="#">Euphorya_Pants</p>
        <p className="pge" href="#">Jacket</p>
        <p className="pge" href="#">Belts</p>
        <p className="pge" href="#">Jeans</p>
      </div>
    </div>
    <div className="row1">
      <div className='iteM'></div>
            <div className='iteMRow'>
              <div className='iteMname'>Euphorya</div>   
              <Button />
            </div>        
    </div>
    <div className="row1"></div>
    <div className="row1"></div>
  </div>
</div>
      
    </div>
  )
}

export default New



