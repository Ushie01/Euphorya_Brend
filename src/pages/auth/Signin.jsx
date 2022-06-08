import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate} from "react-router-dom";
import { getLoginUser } from "../../helpers/api";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();

  
  async function login() {
    console.log(password, email);
    const item = { email, password };
    try {
      let result = await fetch('http://store-betta.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    if (result.message) {
        setError(result.message)
        return
      }
       console.log(item);
       localStorage.setItem('user', result)
    // history.push("/add")
    } catch (error) {
      console.error(error)
    }


  }

  return (
    <div>
      <h1>Login</h1>
      <div className="col-sm-6">
          <input type="text" 
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" 
            required />  <br />
          <input type="password" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control" />  <br />
            <h4 style={{color: 'red'}}>{ error }</h4>
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
    </div >
  )
}



export default Signin;

  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>Username: </label>
  //         <input type="text" name="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password: </label>
  //         <input type="password" name="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <label><Link to="#">Forget Password</Link></label><br />
  //       <button className="btn btn-success SigninButton">Sign In</button>
  //       {/* <div className="button-container">
  //         <input type="submit" />
  //       </div> */}
  //     </form>
  //   </div>
  // );

  // return (
  //   <div className="app">
  //     <div className="login-form">
  //       <div className="title">Sign In</div>
  //       {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
  //     </div>
  //   </div>
  // );