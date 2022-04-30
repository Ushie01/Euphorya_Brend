import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './components/New'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

// assets
// components
// pages
// utilities 

const App = () => {

  return (
   <>
    <NavBar />
    <Routes>
    <Route path='/'
                element={
                  <>
                    <Slider className='slider' />
                    <Home />
                  </>
                }
              />
              <Route path='/New'
                element={
               
                    <New />
              
                } />
              <Route path='/About'
                element={
           
                    <About />
            
                }
              />          
      </Routes >  
      <Footer />  
    </>
       
          
  
 
  );
}

export default App
