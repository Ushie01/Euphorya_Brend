import React, { useEffect, useState } from 'react'
import sanityClient from "../client.js"
import Eur from '../assets/eur45.jpg'
// import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import Dropdown from '../components/Dropdown/Dropdown'


function About() {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      name, mainImage{
        asset->{_id,url}
      }
    }`).then((data) => setPost(data[0]))
       .catch(console.error);
  }, []);

  if (!post) return <h2>Loading...</h2>
 
  return (
    <main className='relative'>
      
      <img src={Eur} alt="Euphorya Brand" className='' />
      <div className='' >
        <img src={post.mainImage.asset.url} alt="" />
       
        <div className=''>
          <h1 className=''>
            Hey there. I'm{""}
            <span className='' style={{color:"black"}}>{post.name}</span>
          </h1>
          <div className="">
            <Dropdown />
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
