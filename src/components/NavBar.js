import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logoEup.svg';
import logoOne from './images/search_black.svg';
import call from './images/call.svg';
import shopping from './images/shopping_cart.svg';
import menu from './images/menu_black.svg';
import whatsapp from './images/whatsapp.svg';

const NavBar = () => {
  const Navigate = useNavigate(

  )
  return (
    <div className='App'>
        <Navbar bg="light" variant="light" sticky='top' expand="lg" collapseOnSelect>
          <button onClick={() => Navigate('/')}>
            <img src={logo} width="120px" className="mr-2" />
          </button>
        <hr />
        
          <Navbar.Toggle className="coloring" style={{ marginRight: 20 }} />
          <Navbar.Collapse>
            <Nav className='nav'>
              <NavDropdown title="Brend">
                <NavDropdown.Item href="products/Fury">Fury</NavDropdown.Item>
                <NavDropdown.Item href="products/Ecstacy">Ecstacy</NavDropdown.Item>
                <NavDropdown.Item href="products/Euphorya">Euphorya</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="products/other">Other</NavDropdown.Item>
              </NavDropdown>
              <button onClick={() => Navigate('New')} className='na'>In New</button>
              <button onClick={() => Navigate('About')} className='na'>About-Us</button>
              <button onClick={() => Navigate('Contact')} className='na'>contact-us</button>
            </Nav>
            <Nav className='d-flex ms-auto mr-2' >
              <button onClick={() => Navigate('/')} className='na'><img src={logoOne} /></button>
              <button onClick={() => Navigate('/')} className='na'><img src={call} /></button>
              <button onClick={() => Navigate('/')} className='na'><img src={shopping} /></button>
              <button onClick={() => Navigate('/')} className='na'><img src={whatsapp} /></button>
              <button onClick={() => Navigate('/')} className='na'><img src={menu} /></button>
            </Nav>
            <hr />
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          This is a content
        </div>
      </div>
  )
}

export default NavBar
