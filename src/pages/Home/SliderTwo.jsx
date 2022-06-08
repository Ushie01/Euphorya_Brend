import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import {fetchProducts} from "../../context/products/productState"
import {ProductContext} from  "../../context/products/productContext";

function SliderTwo() {   
	const context = useContext(ProductContext);
	const { storeProducts, data } = context;
	
	useEffect(() => {
		fetchProducts()
		.then(data=>storeProducts(data))
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
						{data.products.products && data.products.products.map((post, index) => (        			
							<div className="col-sm-3" key={index}> 
								<Link to={`/SinglePost/${post._id}`} key={post._id} style={{ textDecoration: 'none' }} >
									<div className="img-box" style={{marginTop: "30px"}} >
										<img src={`http://store-betta.herokuapp.com${post.image}`} className="img-fluid" alt={post.image} />
									</div>
									<div className="thumb-content">
										<h3 style={style} onClick={() => console.log(post._id)}>{post.brand}</h3>
										<p className="item-price"><strike>#{post.price}</strike> <span>#{post.price}</span></p>	
									</div>		
								   <ul className='list-inline'>
									<li className="list-inline-item"> Rating : <i className="fa fa-star"></i> { `{ ${post.rating} }` } </li>
								</ul>
								 <a className="btn btn-primary" >Add to Cart</a>	
								</Link>
								 <hr style={{color:'gray'}}/>	 
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

      //   sanityClient.fetch(`*[_type == "post"]{
      //       _id, title, slug, strike, span, mainImage{
      //           asset->{_id,url}
      //       },alt
      //   }`)  
      //       .then((data) => setPost(data))
			// .catch(console.error);
		    

	
    // Getting product from local state.
    // const productContext = useContext(ProductContext)
	// const { fetchProducts, products } = productContext
    // React.useEffect(() => {
    //    fetchProducts()
      
    // }, [])
    // console.log(products, 'products ****')