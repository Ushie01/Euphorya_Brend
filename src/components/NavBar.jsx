import React, {useEffect, useState} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logoEup.svg';
import call from '../assets/call.svg';
import menu from '../assets/menu_black.svg'
import shopping from '../assets/shopping_cart.svg';
import whatsapp from '../assets/whatsapp.svg';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import Signout from '../pages/auth/Signout';
import NavDrop from './NavDrop/NavDrop';

function Navbar() {
  
  const [user, setUser] = useState({});
  const [cartLength, setCartLength] = useState({});
  
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    const cartLength = localStorage.getItem('cart');
    const user = JSON.parse(userDetails);
    const cart = JSON.parse(cartLength);
    if (user) {
      setUser(user);
    };                                                
    if (cart) {
      setCartLength(cart);
    };

  }, []);

  
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/"><img src={logo} width="120px" className="mr-2" /></Link>

          <div className="navbar-toggler" style={{color:"black"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <Link to="/Cart" className='nan'><img src={shopping} />
                  <span className="dropbtn badge-pill badge-secondary m-2">
                  {
                    cartLength ? cartLength.length : "0" 
                  }
                  </span>
              </Link>
                  <Link to="/"><img src={menu} alt={menu} navbar-toggler-icon="true" /></Link>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img src={logo} width="120px" className="mr-2" />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <hr />
                <Nav className='nav'>
                    <Link to="/" className='nan'>Home</Link>
                    <Link to="/New" className='nan'>Brand</Link>
                    <Link to="/About" className='nan'>About-Us</Link>
                  </Nav>
                  <hr />
                <Nav className='d-flex ms-auto mr-2' >
                    {user.isAdmin 
                    ?
                    <Link to="/Admin" className='AdminNan' > 
                      <NavDrop />
                    </Link> 
                    : ""}
                    <Link to="/Cart" className='nan'><img src={shopping} />
                        <span className="dropbtn badge-pill badge-secondary m-2">
                    {
                      cartLength ? cartLength.length : "0" 
                    }
                        </span>
                    </Link>
                    <Link to="/Contact-us" className='nan'><img src={call} /></Link>
                    <Link to="/Whatsapp" className='nan'><img src={whatsapp} /></Link>
                  {!user.name ? (
                  <React.Fragment>
                    <Link to='/Signin' className='nan'>Login</Link>
                    <Link to='/Signup' className='nan'>Register</Link>
                  </React.Fragment>
                  ) : (
                  <React.Fragment>
                    <Link to="/Signout" className='nan'>{`${user.name} (Sign-Out)`}</Link>
                  </React.Fragment>
                  )}
                </Nav>
                <hr />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;



              // <UserContext.Consumer>
              //   {
              //     ([user]) => (
              //     <span className="dropbtn badge-pill badge-secondary m-2">{user.name}</span>
              //     )
              //   }
              // </UserContext.Consumer>  