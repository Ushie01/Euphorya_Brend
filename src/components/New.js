import React, { useEffect, useState, Fragment} from 'react'
import { Link } from "react-router-dom"
import sanityClient from "../client.js"
import './New.css'
import InputSlider from './InputSlider'



function New() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title, strike, span, mainImage{
        asset->{_id, url}
      },alt
    }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []); 


  return (
    <div>
      <div className="container">
  <div className="row in-new">
    <div className="col-md-3">
      <div className="container ner">
        <p id="Search">Search</p>
        <form action="">
          <div className="form-row">
            <input type="text" id="name" placeholder="Submit.." />
            <label className="label"><i className="fa fa-search far"></i></label>
          </div>
        </form>
          <p id="price">Price</p>
          <InputSlider />    
        <p id="Categories">Categories</p>
        <p className="pge" href="#">Accessories</p>
        <p className="pge" href="#">Euphurya</p>
        <p className="pge" href="#">Furh</p>
        <p className="pge" href="#">Ecstasy</p>
        <p className="pge" href="#">Euphorya_Pants</p>
        <p className="pge" href="#">Jacket</p>
        <p className="pge" href="#">Belts</p>
        <p className="pge" href="#">Jeans</p>
      </div>
    </div>
      
          <div className="col-md-9">
            <div className='row'>
              {postData && postData.map((post, index) => (
              <div className='col-md-4'>
                <div className="thumb-wrapper">
                   <div className='itemContainer' key={index}>  
                      <div className='iteM'>    
                          <img src={post.mainImage.asset.url} className="img-fluid imgHome" alt={post.mainImage.alt} />        
                        </div>
                        <div className='iteMRow'>
                            <h1>{post.title}</h1> 
                        <p className="item-price"><strike>#{post.strike}</strike> <span>#{post.span}</span></p>	
                        
                          </div>  
                        </div> 
                    </div>
              </div>
            ))}
            </div>
        </div>

  </div>
</div>
      
    </div>
  )
}
// Slider.oninput = () =>  {
//     output.innerHTML = "Price: #2,000.00 - #" + this.defaultValue + ".00";
// }



export default New



