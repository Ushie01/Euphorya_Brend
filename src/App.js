import React, { useState, useEffect } from 'react'
import sanityClient from "./client.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './pages/New/New'
import Home from './pages/Home/Home'
import SliderTwo from './pages/Home/SliderTwo'
import UserViews from './pages/Home/UserViews.jsx'
import Cart from './components/Counter/Cart'
import About from './pages/About'
import Footer from './components/Footer'
import LoginForm from './pages/Contact';
import SinglePost from './components/SinglePost/SinglePost';
import NavCountDrop from './components/NavCountdrop/NavCountDrop'
import Signin from './pages/auth/Signin.jsx'
import ProductState from './context/products/productState'


const App = () => {

  /**********Sanity Fetch************/
  const [postData, setPost] = useState(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            _id, title, slug, strike, span, mainImage{
                asset->{_id,url}
            },alt
        }`)
          .then((data) => setPost(data))
          .catch(console.error);
    }, []); 

  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const [cart, setCart] = useState([]); 
  const productDetails = (item) => {
    setCart([...cart, item]);
    console.log(cart)
  };

  const handleIncrement = (_id) => {
    setCart(cart.map((item) =>item._id === _id?{...item,quantity:+(item.quantity)+1}: { ...item }))
  }     
  
  const handleDecrement = (_id) => {
    setCart(cart.map((item) =>item._id === _id?{...item,quantity:+(item.quantity)-1}: { ...item }))
  } 

  const handleDelete = (_id) => {
    setCart(cart.filter((item) =>item._id !== _id))
  }


  return (
    <ProductState> 
      <NavBar count={count} cart={cart} totalCounters={0} />
          <Routes>
        <Route path='/' element={<><NavCountDrop cart={cart}/><Slider />  <Home /> <SliderTwo  
                     incrementCounter={incrementCounter}
                     productDetails={productDetails} /> <UserViews /> </> } />
              <Route path='/post/:slug' element={<> <SinglePost
                     incrementCounter={incrementCounter}
                     productDetails={productDetails} /> </>} />
              <Route path='/New' element={<New
                     postData={postData} />} />
              <Route path='/About' element={ <About /> } />
              <Route path='/Contact' element={ <LoginForm /> } />  
              <Route path="Cart" element={<Cart 
                     cart={cart} 
                     add={add}
                     handleIncrement={handleIncrement}
                     handleDecrement={handleDecrement}
                     handleDelete={handleDelete}
                     />} />
          </Routes > 
      <Footer />
    </ProductState>
  );
}

export default App
