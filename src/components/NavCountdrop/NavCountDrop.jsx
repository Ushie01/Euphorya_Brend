import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import sanityClient from "../../client";
import './NavCountDrop.css'

const NavCountDrop = ({ cart }) => {
  
  console.log(cart)
  
  return (
    <>
      <div className="dropdown-content p-1"style={{border:"1px solid black"}}>
        <div className='container'>
          {cart && cart.map((cat, i) => (
         <div className='row navCountDrop' >
          <div className='pic col-sm-3'>
              {cat.mainImage.asset.url}
            </div>
              <div className='center col-sm-8'>
                <h1>{cat.title}</h1>
            </div>
            <div className='col-sm-1'>
               X
          </div>
          </div>
          ))} 
        </div>
      </div>     
    </>
  )
}

export default NavCountDrop
