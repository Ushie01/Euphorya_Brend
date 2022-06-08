import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Signin from "../auth/Signin";
import {createUser} from '../../helpers/api'
import './Signup.css';
import './Signin'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      password,
      confirmPassword,
    }
    if (data.password !== data.confirmPassword) {
      return ("Password don't march")
    }
    if (data.email !== '' && data.password !== '') {
      const payload = await createUser(data)
      if (payload.message) {
        setError(payload.message)
        return
      }
       console.log(data);
       localStorage.setItem('user', payload)
    }
  
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
                  <form className='formAction' >
                    
                    <label style={style}>User Name : </label><br />
                    <input 
                      onChange={(e) => setName(e.target.value)} 
                      value={name} type="text" 
                      placeholder='User Name' 
                      className='form-control' 
                      required={true}/><br />
                      
                    <label style={style}>Email :</label><br />
                    <input 
                      onChange={(e) => setEmail(e.target.value)} 
                      value={email} type="email" 
                      placeholder='Email' 
                      className='form-control' 
                      required={true}/><br />
                      
                    <label style={style}>Password : </label><br />
                    <input 
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password} type="password" 
                      placeholder='Password' 
                      className='form-control' 
                      required={true}/><br />
                      
                    <label style={style}>Confirm Password : </label><br />
                    <input 
                      type="password"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      value={confirmPassword}
                      placeholder='password'
                      className='form-control'
                      required={true} /><br />
                      
                    <input type="checkbox" name="vehicle1" value="Bike" />
                    <label style={style}> <h6>I agree to <Link to={Signin} style={style}>Terms & conditions</Link></h6></label><br></br>
                    <label style={style}>Already have an account? <Link to="/Signin" style={style}>Sign In</Link></label><br />
                    
                    <h4 style={{color: 'red'}}>{ error }</h4>
                    <input onClick={(e) => handleSubmit(e)} 
                      type="reset" 
                      value="Create Account" 
                      className='createAccount' 
                      style={style} /><br />
                      
                  </form>
              </div>
          </div>
      </div>

    </>
  )
}

export default Signup
