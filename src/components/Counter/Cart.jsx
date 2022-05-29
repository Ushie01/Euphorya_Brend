import React, { useState } from 'react';
import Signin from '../../pages/auth/Signin';
import Signup from '../../pages/auth/Signup'
import './Cart.css'


function Cart({cart, handleDelete, handleIncrement,handleDecrement }) {
  const [checkOut, setCheckOut] = useState(false);

  console.log(cart)
  const checkOutPage = () => {
    setCheckOut(true);
  };

  const deleteItem = (id) => {
    handleDelete(id);
  };

  const add = (id) => {
    handleIncrement(id);
  };

  const minus = (id) => {
    handleDecrement(id);
  };



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
                {cart && cart.map((value, i) => (
                <>
              <div className='rowCart' key={i}>
                <i className="fa fa-times fa-3x m-2 " onClick={() => {deleteItem(value._id)}}></i>
                <div className='CartOne'>
                  <img src={value.mainImage.asset.url} alt={value.mainImage.url} className='cartItem ' />
                </div>
                <div className='CartTwo'>
                    <h1>Brend : <span>{value.title}</span></h1>
                    <h4>Quantity : <span>{value.quantity}</span></h4>
                    <h4>Size: <span>{value.size}</span></h4>  
                    <h4>Price : <span>#{value.span}.00</span></h4>
                    <h3>Total : <span>#{value.quantity * value.span}.00</span></h3>
                </div>
                <div className='CartThree'>
                    <button className="fa fa-plus-square fa-3x" onClick={() => {add(value._id)}}></button>
                    <i className="btn btn-warning btn-sm fa-4x" id="counter">{value.quantity}</i>
                    <button className="fa fa-minus-square fa-3x "
                          style={{color:"green"}}
                          onClick={() => { minus(value._id) }}
                          disabled={value.quantity === 0 ? "disabled" : ""}></button>
                </div>
                </div>
                    <hr id='horizon' />
                </>
                ))}
              </div>
            <div className='shoppingRight col-md-4'>
              <h1 className='cartTotal'>Cart Total </h1>
              <div className="row" id='subtotal'>
                <h1 className='col-md-3'>subtotal</h1>
                <h1 className='col-md-9 subtotalAmount'>#5,000.00</h1>
              </div>
              <div className="row" id='subtotal'>
                <h1 className='col-md-3'>shipping</h1>
                <h1 className='col-md-9'>
                  <form action="">
                    <input type="radio" id="ratio" name="fav_language" value="HTML" />
                    <label htmlFor="html" id="Ratio"> Delivery within Lekki 1, up to Chevron (Within 5 WORKING DAYS): ₦850.00	 </label><br />
                    <input type="radio" id="ratio" name="fav_language" value="HTML" />
                    <label htmlFor="html" id="Ratio"> Delivery within Lekki 1, up to Chevron (Within 5 WORKING DAYS): ₦850.00	 </label>
                    <input type="radio" id="ratio" name="fav_language" value="HTML" />
                    <label htmlFor="html" id="Ratio"> Delivery within Lekki 1, up to Chevron (Within 5 WORKING DAYS): ₦850.00	 </label>
                  </form>
                </h1>
              </div>
              <hr />
               <button onClick={checkOutPage} className="btn btn-warning">Check Out</button>
            </div>
          </div>
        </div>
        </div>
         {!checkOut ? "" : <Signup />}
      </div>
      
  </>    
  );
}

export default Cart
