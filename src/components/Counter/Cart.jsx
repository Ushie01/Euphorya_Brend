import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getState } from '../../helpers/api';
import { getCity } from '../../helpers/api';
import Naira from 'react-naira';
import shopping from '../../assets/local_shipping.svg';
import './Cart.css'


function Cart() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState('');
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getStateLocation = async () => {
      const requestState = await getState();
      setState(requestState);
    };

    console.log(state);
    getStateLocation();

    const userDetails = localStorage.getItem('cart');
    const user = JSON.parse(userDetails);
    if (user) {
      setProducts(user)
    };

  }, []);
  

  const handleState = (e) => {
    const getStateId = e.target.value;
    setStateId(getStateId)
  }

  useEffect(() => {
    const getCityLocation = async () => {
      const res = await getCity(stateId);
      setCity(res);
    }
    getCityLocation();
    console.log(city)
  }, [stateId])

 
  // cart quantity increment handle
  const add = (_id, size) => {
    setProducts(products.map((item) => item.productId === _id && item.size === size
      ?
      { ...item, quantity: +(item.quantity) + 1 }
      :
      { ...item }))
    localStorage.setItem('cart', JSON.stringify(products));
  }

  // cart item delete handle
  const deleteItem = (_id, size) => {
    setProducts(products.filter((item) => item.productId !== _id && item.size !== size));
    let temp = products.filter(item => item._id !== _id && item.size !== size);
    localStorage.setItem("cart", JSON.stringify(temp));
    window.location = '/Cart'
  }

  // cart quantity decrement handle
  const minus = (_id, size) => {
    setProducts(products.map((item) => item.productId === _id && item.size === size
      ?
      { ...item, quantity: +(item.quantity) - 1 }
      :
      { ...item }))
    localStorage.setItem('cart', JSON.stringify(products));
  } 

  const [sum, setSum] = useState('');

  useEffect(() => {
    const getTotal = () => {
      let temp = products.map(function (item) {
        return parseFloat(item.price * item.quantity);
      });

      let add = temp.reduce(function (prev, next) {
        return prev + next;
      }, 0);

      setSum(add);
      console.log(sum)
      }
      
    getTotal();   
    
  });

  // console.log(sum);
  return (
    <>
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='cartImage'>
            <p className='cart'>Cart</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row' >
            <div className='shoppingCart'>
              <div className='shoppingLeft col-md-8'>
                <h1 id="cart">Shopping Cart</h1>
                <hr id='horizon' />
                {products && products.map((value, i) => (
                <div key={i}>
                  <div className='rowCart'>
                    <i className="fa fa-times fa-3x m-2 " onClick={() =>  { deleteItem(value.productId, value.size)}}></i>
                    <div className='CartOne'>
                      <img src={`http://store-betta.herokuapp.com${value.image}`} alt={value.image} className='cartItem ' />
                    </div>
                    <div className='CartTwo'>
                        <h1>{`Name: ${value.name}`}</h1>
                        <h4>{`Quantity: ${value.quantity}`}</h4>
                        <h4>{`Size: ${value.size}`}</h4>  
                        <h4>Price: <Naira>{`${(value.price).toLocaleString()}`}</Naira></h4>
                        <h3>Subtotal : <Naira>{`${(value.price * value.quantity).toLocaleString()}`}</Naira></h3>
                    </div>
                    <div className='CartThree'>
                        <button className="fa fa-plus-square fa-3x" onClick={() => {add(value.productId, value.size)}}></button>
                        <i className="btn-warning btn-sm fa-4x countSpan" >{value.quantity}</i>
                        <button className="fa fa-minus-square fa-3x "
                              style={{color:"green"}}
                            onClick={() => { minus(value.productId, value.size) }}
                          disabled={value.quantity === 0 ? "disabled" : ""}></button>
                    </div>
                    </div>
                    <hr id='horizon' />
                </div>
                ))}
                <div className='container'>
                  <div className='displayInline'>
                    <div className='nnpp'>Total:</div>
                    <div className='nnp' style={{ color: "black" }}><Naira>{sum}</Naira></div>
                </div>
              </div>
                </div>
                <div className='shoppingRight col-md-4'>
                <h1 className='cartTotal'>Delivery </h1>
                <hr />
                  <h1 className='cartTotal'>Choose Your Location</h1>
                      <div className='form-inputs'>
                         {/* <label className='form-label'>State</label> */}
                          <select className='form-select' onClick={(e) => handleState(e)}>
                            <option className='Select'>--State--</option>
                                {state && state.map((value, index) => {
                                  return <option key={index} value={value.id} style={{ color: "black" }}>{value.name}</option>
                                })}
                          </select>
                          </div>
                          <div className='form-inputs fip'>
                            {/* <label className='form-label'>City</label> */}
                            <select className='form-select'>
                              <option className='option'>--City--</option>
                                {city.lgas && city.lgas?.map((value, index) => {
                                return <option key={index} value={value.id} className="option">{value}</option>
                                })}
                            </select>
                          </div>
                        <hr />
                      <div className='displayInline'>
                        <div className='row'>
                          <div className='col-md-2'><img src={shopping} alt={shopping} /></div>
                          <div className='col-md-10 '>
                            <h3>Door Delivery</h3>
                            <p>Delivery #1,500.00</p>
                            <p>Delivery time starts from the day you place your order to the day one of our
                              associates makes a first attempts to deliver to you. Delivery will be attempted
                              2 times over 5days (7.00am to 5.30pm) after which the item will be cancelled, if 
                              you are unreachable or unable to receive the order.
                            </p>
                          </div>
                          <hr />
                          <Link to="/UserInfo">
                            <button id="insButton" > CheckOut  </button>
                          </Link>
                      </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
    </div>
  </>    
  );
}

export default Cart
