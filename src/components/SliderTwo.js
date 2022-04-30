import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import sanityClient from "../client.js"


function SliderTwo() {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title, slug, strike, span, mainImage{
                asset->{_id,url}
            },alt
        }`)
            .then((data) => setPost(data))
            .catch(console.error);

    }, []); 

    const style = {
        color: "#000"
	}
	

    return (
      
    <div>
        <div className="container" style={{minHeight: '600px'}}>
	<div className="row">
		<div className="col-md-12">
			<h2>Trending <b>Products</b></h2>
			<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
			{/* <!-- Carousel indicators --> */}
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>   
			{/* <!-- Wrapper for carousel items --> */}
			<div className="carousel-inner">
				<div className="carousel-item active">
                    <div className="row">
                         {postData && postData.map((post, index) => (              
						<div className="col-sm-3" key={index}>
							<div className="thumb-wrapper">
									 <Link to={"./post/" + post.slug.current} key={post.slug.current} style={{ textDecoration:'none'}}>
								<div className="img-box" style={{marginTop: "30px"}} >
									<img src={post.mainImage.asset.url} className="img-fluid" alt={post.mainImage.alt} />
								</div>
								<div className="thumb-content">
                                    <h3 style={style}>{post.title}</h3>
                                    <p className="item-price"><strike>#{post.strike}</strike> <span>#{post.span}</span></p>	
										 </div>		 
                                </Link>
									 <a href="#" className="btn btn-primary">Add to Cart</a>	
								<hr style={{color:'gray'}}/>	 
							</div>
                        </div>
                        ))}    
                          
					</div>
				</div>
			</div>
			{/* <!-- Carousel controls --> */}
			<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control-next" href="#myCarousel" data-slide="next">
				<i className="fa fa-angle-right"></i>
			</a>
		</div>
		</div>
	</div>
</div>

    </div>
  )
}

export default SliderTwo
