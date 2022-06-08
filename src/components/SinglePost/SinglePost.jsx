import React, { useEffect, useState, useContext} from 'react';
import { useParams } from "react-router-dom";
import Dropdown from '../Dropdown/Dropdown';
import "./SinglePost.css";
import useForm from '../UseForm';
import validate from '../Validateinfo';

function SinglePost({ incrementCounter, count, productDetails, handleInput }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  }

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  const [size, setSize] = useState("Size --Select Option {UK}");
  const { _id } = useParams();
  const [quantity, setQuantity] = useState({});

  //fetching id details
  const [state, setState] = React.useState([]); 
  const requestDetails = async () => {
    const res = await fetch(`http://store-betta.herokuapp.com/api/products/${_id}`);
    const data = await res.json();
    setState(data);
  };
  
  React.useEffect(() => {
    requestDetails();
  }, []);
  
  const handleDetails = () => {   
    const details={ ...state, size, quantity }
    setState(details);
    productDetails(details);
    console.log(details)
  }

  return ( 
    <div>
      <main>
        <div className="containerImage">
          <div className="containerRow1">
            <img src={`http://store-betta.herokuapp.com${state.image}`} alt={state.image} className="containRow1"/>
          </div>
          <div className="containerRow2">
            <div className='containerPadding'>              
              <form onSubmit={handleSubmit} >
                <h1 className='containerTitle'>{state.brand}</h1>
                <h2 style={{color:"gray"}}>{state.name}</h2>
                <h3 className='containerSpan'># {state.price}</h3>
                <Dropdown
                  id="size"
                  name="size"
                  type="number"
                  size={size}
                  setSize={setSize}
                  onChange={handleChange}
                  value={values.size}
                  required
                />
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
                    required
                  />
                  <button className='addToCart' onClick={() => {handleDetails()}}  >Add Cart</button>
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


// const WrappedDetails = () => {
//   const params = useParams();
//   return <SinglePost params={params} />;
// };

export default SinglePost;


  // console.log(data.products);
  // const [data, setData] = useState(null);
  /*********Sanity Fetch********/
  //   useEffect(() => {
  //       sanityClient.fetch(`*[slug.current == "${slug}"]{
  //           _id, title, value, slug, strike, span, mainImage{
  //               asset->{_id,url}
  //           },alt
  //       }`)
  //           .then((post) => setSinglePost(post[0]))
  //           .catch(console.error);
      
  //   }, [slug]);
  
  // if (!singlePost) return <h1>Loading...</h1>

