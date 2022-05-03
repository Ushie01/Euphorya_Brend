import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './images/logoEup.svg';
import logoOne from './images/search_black.svg';
import call from './images/call.svg';
import shopping from './images/shopping_cart.svg';
import menu from './images/menu_black.svg';
import whatsapp from './images/whatsapp.svg';
import { NoEncryption } from '@mui/icons-material';
import { fontSize } from '@mui/system';

const NavBar = () => {
  const sty = {
    border: "none",
    fontSize: "14px",
    boxShadow: "none",

  }

  const Navigate = useNavigate()
 
  return (
    <div className='App'>
      
        <Navbar bg="light" variant="light" sticky='top' expand="lg" collapseOnSelect>
        <button style={sty} onClick={() => Navigate('/')} >
            <img src={logo} width="120px" className="mr-2" />
          </button>
        
          
          <Navbar.Toggle className="coloring" style={{ marginRight: 20 }} />
          <Navbar.Collapse>
            <Nav className='nav'>
              <button style={sty}><NavDropdown title="Brend">
                <NavDropdown.Item href="products/Fury">Fury</NavDropdown.Item>
                <NavDropdown.Item href="products/Ecstacy">Ecstacy</NavDropdown.Item>
                <NavDropdown.Item href="products/Euphorya">Euphorya</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="products/other">Other</NavDropdown.Item>
              </NavDropdown></button>
              <button style={sty} onClick={() => Navigate('New')} className='New'>In New</button>
              <button style={sty} onClick={() => Navigate('About')} className='About'>About-Us</button>
              <button style={sty} onClick={() => Navigate('Contact')} className=''>Contact-Us</button>
            </Nav>
            <Nav className='d-flex ms-auto mr-2' >
              <button style={sty} onClick={() => Navigate('Search')} className='na'><img src={logoOne} /></button>
              <button style={sty} onClick={() => Navigate('Call')} className='na'><img src={call} /></button>
              <button style={sty} onClick={() => Navigate('Shopping')} className='na'><img src={shopping} /></button>
              <button style={sty} onClick={() => Navigate('Whatsapp')} className='na'><img src={whatsapp} /></button>
              <button style={sty} onClick={() => Navigate('Menu')} className='na'><img src={menu} /></button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      
      <hr />
      </div>
  )
}

export default NavBar
