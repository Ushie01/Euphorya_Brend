import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from '@sanity/image-url';
import Dropdown from './Dropdown';
import Button from './Button';


// const builder = imageUrlBuilder(sanityClient);
// const urlFor = (source) => {
//     return builder.image(source)
// }

function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title, slug, strike, span, mainImage{
                asset->{_id,url}
            },alt
        }`)
            .then((data) => console.log(data[0]))
            .catch(console.error);

    }, []); 
    
    
  return (
    <div>
      <main>
        

      </main>
    </div>
  )
}

export default SinglePost
