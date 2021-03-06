import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignIn } from "../../components/Validateinfo";
import { getLoginUser } from "../../helpers/api";
import CheckOut from '../../components/Counter/CheckOut';
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const login = async (e) => {
      e.preventDefault();
      const values = {
        password,
        email
      }

  setErrors(validateSignIn(values))
  const payload = await getLoginUser(values);
  if (payload.message) {
    setErr(payload.message)
    return
  } 
    localStorage.setItem('user', JSON.stringify(payload));
    setIsSubmitted(true);
    window.location = "/"

  }
 
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="form-inputs">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

         {errors.email && <p style={{color:"red"}}>{errors.email}</p>} 
        
        <div className="form-inputs">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
       
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>} 
       
        <label><Link to="#">Forget Password</Link></label><br />
         {err && <p style={{color:"red"}}>{err}</p>}
        <button
          className="btn btn-success SigninButton"
          onClick={(e) => { login(e) }}>
          Sign In
        </button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In </div>
        {isSubmitted ? <div>{`Welcome on board`}</div> : renderForm }
      </div>
    </div>
  );
}
export default Signin;

  //   const setData = () => {
  //     let obj = {name: 'John', age: 12, email: 'abugodwin@gmail.com'}
  //     sessionStorage.setItem('myData', JSON.stringify(obj));
  //   }

  //   const getData = () => {
  //     let data = sessionStorage.getItem('myData');
  //     data = JSON.parse(data);
  //     setState(data)
  //     console.log(data)
  //   }                                                                                          