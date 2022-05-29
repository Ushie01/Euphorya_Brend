import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Signin from './Signin';
import './Signup.css';

function Signup() {
  const [login, setLogin] = useState(false);

  const handleSignUp = () => {
    setLogin(true);
  }

  const style = {
    color:"white"
  }

  return (
    <>
      <div>
          <div className='container-fluid nju'>
              <div className='row SignUpPage'>
                  <h1 style={style} className="signUp">Sign Up</h1>
                  <form action="" className='formAction'>
                    <label htmlFor="" style={style}>User Name : </label><br />
                    <input type="text" placeholder='User Name' className='form-control'/><br />
                    <label htmlFor="" style={style}>Email :</label><br />
                    <input type="email" placeholder='Email' className='form-control'/><br />
                    <label htmlFor="" style={style}>Password : </label><br />
                    <input type="password" placeholder='Password' className='form-control'/><br />
                    <label htmlFor="" style={style}>Password : </label><br />
                    <input type="password" placeholder='Password' className='form-control'/><br />
                    <input type="checkbox" name="vehicle1" value="Bike" />
                    <label htmlFor="" style={style}> <h6>I agree to <Link to={Signin} style={style}>Terms & conditions</Link></h6></label><br></br>
                    <label htmlFor="" style={style}>Already have an account? <Link to={Signin} style={style}>Sign In</Link></label><br />
                    <button className='btn btn-success createAccount' onClick={handleSignUp} style={style}>Create Account</button><br />
                  </form>
              </div>
          </div>
      </div>

      {!login ? "" : <Signin />}
    </>
  )
}

export default Signup
