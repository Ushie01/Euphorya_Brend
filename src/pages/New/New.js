import React, { useEffect, useState, Fragment} from 'react'
import { Link } from "react-router-dom"
import sanityClient from "../../client.js"
import './New.css'
import InputSlider from '../../components/InputSlider'


function New() {
  const [postData, setPost] = useState(null);
  const [value, setValue] = useState('');
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title, slug, strike, span, mainImage{
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
                    <input type="text" id="name" placeholder="Submit.." value={value} onChange={(e) => setValue(e.target.value)}/>
                    <label className="label"><i className="fa fa-search far"></i></label>
                  </div>
                </form>
              <p id="price">Price</p>

              <InputSlider value={slide} onChange={(e) => setSlide(e.target.value)}/>
                
              <p id="Categories">Categories</p>
              {postData && postData.map((post, i) => (
                <Fragment>
                  <div key={i}>
                    <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                    <p className="pge" href="#">{post.title}</p>
                  </Link>
                  </div>
                </Fragment>
              ))}
           </div>
          </div>
      
          <div className="col-md-9">
            <div className='row'>
              {postData && postData.filter((post) => {
                if (value == "") {
                  return post
                } else if (post.title.toLowerCase().includes(value.toLowerCase())) {
                  return post
                }
                }).map((post, i) => (
                <div className='col-md-4' key={i}>
                 <Link to={`/post/${post.slug.current}`} key={post.slug.current} >
                <div className="thumb-wrapper">
                   <div className='itemContainer'>  
                      <div className='iteM'>    
                          <img src={post.mainImage.asset.url} className="img-fluid imgHome" alt={post.mainImage.alt} />        
                        </div>
                        <div className='iteMRow'>
                            <h1>{post.title}</h1> 
                            <p className="item-price"><strike>#{post.strike}</strike> <span>#{post.span}</span></p>	
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



