import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import sanityClient from "../../client";
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button';
import "./SinglePost.css";
import useForm from '../UseForm';
import validate from '../Validateinfo';

 
function SinglePost({ incrementCounter, productDetails, handleInput }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }


  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  const [singlePost, setSinglePost] = useState(null);
  const [size, setSize] = useState("Size --Select Option {UK}");
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity]=useState({})
  


  /*********Sanity Fetch********/
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            _id, title, value, slug, strike, span, mainImage{
                asset->{_id,url}
            },alt
        }`)
            .then((post) => setSinglePost(post[0]))
            .catch(console.error);
      
    }, [slug]); 
  if (!singlePost) return <h1>Loading...</h1>

console.log(singlePost)
  const handleDetails = () => {   
   const details={ ...singlePost, size, quantity }
    setSinglePost(details);
    productDetails(details);
}

  // const [array, setArray] = useState(singlePost);

  // setArray([...array, ...arr]);
  // console.log(setArray())


  return ( 
    <div>
      <main>
        <div className="containerImage">
          <div className="containerRow1">
            <img src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.url} className="containRow1"/>
          </div>
          <div className="containerRow2">
            <div className='containerPadding'>              
              <form onSubmit={handleSubmit} >
                <h1 className='containerTitle'>{singlePost.title}</h1>
                <h3 className='containerSpan'> #{singlePost.span}</h3>
                <Dropdown
                  id="size"
                  name="size"
                  type="number"
                  size={size}
                  setSize={setSize}
                  onChange={handleChange}
                  value={values.size}
                />
                <Dropdown />
                 {errors.size && <h3 style={{color:"red"}}>{errors.size}</h3>}
                <div className='containerWrapper'>
                  <input
                    id="quanity"
                    name='quantity'
                    type="number"
                    min={0}
                    max={15}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder='Quantity'
                    className='containerInput'                 
                    style={{ height: "50px" }}
                    value={quantity}
                  />
                  <button onClick={() => { incrementCounter(); handleDetails()}} >Add Cart</button>
                  {/* <Button onClick={incrementCounter} /> */}
                </div>
                 {errors.size && <h3 style={{color:"red"}}>{errors.size}</h3>}
              </form>
              <h1 style={{ color: "#000" }}></h1>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}


export default SinglePost
