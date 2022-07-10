import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getState } from '../../helpers/api';
import { getCity } from '../../helpers/api';
import Naira from 'react-naira';
import mark from '../../assets/mark.svg';
import mcvisa from '../../assets/mcandvisa.png';
import paypal from '../../assets/paypal.webp';
import whatsapp from '../../assets/whatsapp.svg';
import './UserInfo.css'


function UserInfo() {
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState('');
  const [city, setCity] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getStateLocation = async () => {
      const requestState = await getState();
      setState(requestState);
    };
    console.log(state)
    getStateLocation();

    const userDetails = localStorage.getItem('cart');
    const user = JSON.parse(userDetails);
    if (user) {
      setProducts(user);
    };                     
  }, []);
  
//  console.log(products);
  const handleState = (e) => {
    const getStateId = e.target.value;
    setStateId(getStateId)
    console.log(state);
  };


  useEffect(() => {
    const getCityLocation = async () => {
      const res = await getCity(stateId);
      setCity(res);
    }
    getCityLocation();
  }, [stateId])

  //Local Storage
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('');
  const [lg, setLg] = useState('');
  const [user, setUser] = useState({})
  const [sum, setSum] = useState('');
  const [deliveryAmount, setDeliveryAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      phoneNumber,
      address,
      region,
      lg
    }
    console.log(values);
    localStorage.setItem('userAddress', JSON.stringify(values));
  }

  useEffect(() => {
    const getAddress = localStorage.getItem('userAddress');
    const user = JSON.parse(getAddress);
    if (user) {
      setUser(user)
    };
  })

 // Calculating Subtotal and Amount

  useEffect(() => {
    const getTotal = () => {
      let temp = products.map(function (item) {
        return parseFloat(item.price * item.quantity);
      });
      let add = temp.reduce(function (prev, next) {
        return prev + next;
      }, 0);
      setSum(add);
    }
    getTotal();
    const getQuantity = () => {
      let quantities = products.map(function (quantity) {
          return parseFloat(quantity.quantity);
      });
      let add = quantities.reduce(function (prev, next) {
          return prev + next;
      }, 0);
      let value = {};
      const amount = 1200;
      if (add > 1) {
        value = add * amount;
      }
      setDeliveryAmount(value);
    }
    
    getQuantity()
  }, []);

  // console.log(sum)

  return (
    <div>
        <div className='cash-fluid'>
          <div className='cash-row container'>
            <div className='check-out-row'>
              <h1 className='check-out-header'>CHECKOUT</h1>
              <div className='address-method'>
                {
                user.firstName ?
                  <>
                      <p className='address-header'>
                        <img src={mark} alt={mark} />1. ADDRESS DETAILS
                      </p>
                    <hr />
                    <header>
                      <div>
                        <p className='firstName'>{user.firstName}</p>
                        <h3>{user.address}</h3>
                        <h3>{user.phoneNumber}</h3>
                      </div>
                     <p className='Change' type="button" onClick={(e) => {handleSubmit(e)}}>CHANGE</p>
                    </header>
                  </>
                  : 
                  <>
                   <p className='address-header'>1. ADDRESS DETAILS</p>
                  <hr />
                 <form>
                    <div className='row'>
                      <div className="col-md-6 form-input">
                        <label className="form-label">First name*</label>
                        <input 
                          name="firstName"
                          type="text" 
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required  
                        />
                      </div>
                      
                      <div className="col-md-6 form-input">
                        <label className="form-label">Last name*</label>
                        <input 
                          name='lastName'
                          type="text"
                          className="form-control" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className="col-md-12 form-input">
                        <label className="form-label">Mobile Phone Number*</label>
                        <input 
                          name='phoneNumber'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="number" 
                          className="form-control" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className="col-md-12 form-input">
                        <label className="form-label">Address*</label>
                        <input
                          name='address' 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          id='address-input'
                          type="text" 
                          placeholder='Street Name/ Building/ Apartment No. /Floor.'
                          className="form-control" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className='col-md-12 form-input'>
                        <label className="form-label">State/Region*</label>
                          <select className='form-select' 
                                name='region'  
                                value={region}
                                onClick={(e) => handleState(e)} 
                                onChange={(e) => setRegion(e.target.value)}
                                required
                              >
                              <option>Please Select..</option>
                              {state.map((value, index) => {
                               return <option 
                                        key={index} 
                                        value={value.id} 
                                        required
                                        >
                                        {value.name}
                                      </option> })}
                          </select>
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className='col-md-12 form-input'>
                        <label className="form-label">City*</label>
                          <select className='form-select' 
                                name='region'  
                                value={lg}
                                onChange={(e) => setLg(e.target.value)}
                                required
                              >
                              {city.lgas && city.lgas?.map((value, index) => {
                               return <option 
                                        key={index} 
                                        value={value.id} 
                                        required
                                        >
                                        {value}
                                      </option> })}
                          </select>
                      </div>
                    </div>
                    
                    <div className='row'>
                      <button id="saveButton" onClick={(e) => {handleSubmit(e)}}> SAVE AND CONTINUE  </button>
                    </div>
                 </form>
                </>
                }
               
              </div>   
                                                                                                                                                                                         
              <div className='address-method payment-method'>
              {
                user.firstName ?
              <>
                <p className='address-header'><img src={mark} alt={mark} style={{color:"green"}} /> 2. DELIVERY METHOD</p>
                <hr />
                  <input type="radio" className="fav_language" value="HTML" />
                 <label htmlFor="html" className='radioLabel'> Door Delivery</label><br />
                 <h3 className='radioLabel'>Delivered between 
                <span className='deliverySpan'>Thursday 7 Jul</span> and
                <span> Monday 11 Jul</span> for <span className='spanAmount'>#3,000.00</span></h3>
              </>
                : 
              <>
                <p className='address-header'> 2. DELIVERY METHOD</p>
                <hr />
              </>
              }
              </div>
              
              <div className='address-method payment-method'>
              {
                user.firstName ?
              <>
                <p className='address-header'><img src={mark} alt={mark} style={{color:"green"}} /> 3. PAYMENT METHOD</p>
                <hr />
                <div className='header-payment'>
                   <header >
                      <p className='totaltopay'>TOTAL TO PAY</p>
                      <p className='totaltosum'><Naira>{sum}</Naira></p>
                    </header>
                </div>
                <div>
                   <header >
                      <div>
                        <input type="radio" name="payment" />
                        <label className='totaltopay'>Pay With Master and Visa</label>
                      </div>
                      <img src={mcvisa} alt={mcvisa} className="mcvisa" />
                    </header>
                    <header >
                      <div>
                        <input type="radio" name="payment"/>
                        <label className='totaltopay'>Pay With Paypal</label>
                      </div>
                      <img src={paypal} alt={paypal} className="mcvisa" />
                    </header>
                    <button id="saveButton" > PAY NOW: <Naira>{sum}</Naira>  </button>
                </div>
              </>
                : 
              <>
                <p className='address-header'> 3. PAYMENT METHOD</p>
                <hr />
              </>
              }
              </div>
            </div>
            
            <div className='summary-row'>
              <h1 className='summary-header'>SUMMARY</h1>
              <div className='order-method'>
              <p className='address-head'>{`YOUR ORDER (${products.length} item)`}</p>
                <hr />
                {products && products.map((value, index) => {
                  return <header key={index}>
                            <img src={`http://store-betta.herokuapp.com${value.image}`} 
                                alt={value.image} 
                                className='summary-Image' 
                            />
                            <div className='summary-Body'>
                              <p className='value-name'>{value.name}</p>
                              <p className='value-price'><Naira>{value.price}</Naira></p>
                              <p className='value-quantity'>{`Qty: ${value.quantity}`}</p>
                            </div>
                        </header>
                  })}
                  <hr />
                  <div>
                    <header>
                      <p className='sub-total'>Subtotal</p>
                      <p className='sub-total'><Naira>{sum}</Naira></p>
                    </header>
                    <header>
                      <p className='sub-total'>Delivery</p>
                      <p className='sub-figure'><Naira>{deliveryAmount}</Naira></p>
                    </header>
                  </div>
                  <hr />
                  <header>
                    <p className='TOTAL'>Total</p>
                    <p className='TOTAL-FIGURE'><Naira>{deliveryAmount + sum}</Naira></p>
                  </header>
              </div>
              <div className='order-method-help'>
              <p className='address-head'>NEED HELP?</p>
                <hr />
                <p className='contact-help'>Contact an expect to support you</p>
                <Link to="/Payment">
                 <button id="helpButton" > LIVE CHAT  <img src={whatsapp} alt={whatsapp}  className="whatsapp-help"/> </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserInfo
