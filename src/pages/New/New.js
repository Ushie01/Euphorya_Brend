import React, { useEffect, useState, Fragment, useContext} from 'react'
import { Link } from "react-router-dom"
import './New.css'
import InputSlider from '../../components/InputSlider'
import { fetchProducts } from "../../context/products/productState";
import { ProductContext } from "../../context/products/productContext";

function New() {
  const [value, setValue] = useState('');
  const [slide, setSlide] = useState(0);
  const context = useContext(ProductContext);
  const { storeProducts, data } = context;
  
  useEffect(() => {
		fetchProducts()
		.then(data=>storeProducts(data))
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
                    <input type="text" id="name" placeholder="Submit.." value={value} onChange={(e) => setValue(e.target.value)}/>
                    <label className="label"><i className="fa fa-search far"></i></label>
                  </div>
                </form>
              <p id="price">Price</p>

              <InputSlider value={slide} onChange={(e) => setSlide(e.target.value)}/>
           
              <p id="Categories">Categories</p>
              {data.products.products && data.products.products.map((post, i) => (
                <Fragment>
                  <div key={i}>
                    <Link to={`/SinglePost/${post._id}`} key={post._id} className="pge">
                    <p href="#">{post.brand}</p>
                  </Link>
                  </div>
                </Fragment>
              ))}
           </div>
          </div>
      
          <div className="col-md-9">
            <div className='row'>
              {data.products.products && data.products.products.filter((post) => {
                if (value == "") {
                  return post
                } else if (post.brand.toLowerCase().includes(value.toLowerCase())) {
                  return post
                }
                }).map((post, i) => (
                <div className='col-md-4' key={i}>
                    <Link to={`/SinglePost/${post._id}`} key={post._id} className="pge">
                <div className="thumb-wrapper">
                   <div className='itemContainer'>  
                      <div className='iteM'>    
                          <img src={`http://store-betta.herokuapp.com${post.image}`} className="img-fluid imgHome" alt={post.image} />        
                        </div>
                        <div className='iteMRow'>
                            <h1 className='postBrand'>{post.name}</h1> 
                            <p className="item-price"> <span>#{post.price}</span></p>	
                          </div>  
                        </div> 
                    </div>
                  </Link>
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



