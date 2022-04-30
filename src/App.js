import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './components/New'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'


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
                    <Footer />
                  </>
                }
              />
              <Route path='/New'
                element={
                  <>
                    <New />
                  </>
                } />
              <Route path='/About'
                element={
                  <>
                    <About />
                  </>
                }
              />          
      </Routes >    
    </>
       
          
  
 
  );
}

export default App
