import React from 'react'
import Female from './images/female.svg'
import Male from './images/male.svg'
import Transgender from './images/transgender.svg'
import NewOne from './images/new1.png'
import EurSix from './images/eur6.jpeg'
import Eur45 from './images/eur45.jpg'
import NavBar from './NavBar'
import SliderTwo from './SliderTwo'


function Home() {
  const style = {
    color: '#000'
  }
  return (
    <>
      <div className="container-fluid" style={{  marginTop:'200px'}}>
        <div className="row brand">
          <marquee className="marquee" behavior="scroll" direction="right" scrollamount="12" width="100%"><h1>UNLEASH RADICALITY</h1></marquee>
          <marquee className="marquee1" behavior="scroll" direction="left" scrollamount="12" width="100%"><h3>ME AND MY FRIENDS ARE SOUL FOOD, WE AREN'T EYE CANDY</h3></marquee>
        </div>
      </div>
      <div className="container-fluid cont">
        <div className="row firstRow">
          <marquee behavior="scroll" direction="right" scrollamount="12" width="60%">I love Euphorya</marquee>
          <div className="firstChild">
            <div className="row1 er">
              <button className="button">Shop Now <img src={Female} className="female img-fluid" alt="" /></button>
            </div>
            <hr style={{color:'#000'}}/>
            <h3 className="Euph">Euphorya</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
          <div className="firstChild">
            <div className="row1 er1">
              <button className="button"> Shop Now <img src={Male} className="female" alt="" />
              </button>
            </div>
            <hr style={{color:'#000'}}/>
            <h3 className="Euph1">Fury</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
          <div className="firstChild">
            <div className="row1 er2">
              <button className="button"> Shop Now <img src={Transgender} className="female" alt="" />
              </button>
            </div>
            <hr style={{color:'#000'}}/>
            <h3 className="Euph2">Ecstasy</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
        </div>
      </div>


      
      <div className="container-fluid">
        <div className="row roWW">
          <div className="rowOne secondChild">
              <img className="new1 img-fluid" src={NewOne} alt="" />
            <h2 className="everything">Radical street</h2>
            <p className="p" style={style} >fashion and urban clothings at it's best</p>
            <button className="shop"> Shop Now = </button>
          </div>
          <div className="rowTwo secondChild"><img src={EurSix} className="img-fluid" alt="" /></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div id="drop">
            <p className="it">Euphorya brand is inspired</p>
            <p className="to">With clear vision</p>
            <p className="line">___</p>
            <p className="put"style={style}> for social consciousness and to make a statement with unique street clothings</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row Party">
          <div className="left esc"><img src={Eur45} className="img-fluid" alt="" /></div>
          <div className="left">
            <div className="season">
              <p id="it" style={style}>Radical street</p>
              <p id="to" style={style}>fashion</p>
              <p id="line" style={style}>___</p>
              <p id="put" >and urban Clothing at it's best</p>
              <button className="nowS"> Shop Now </button>
            </div>
          </div>
        </div>
      </div>
      

      <SliderTwo />

      {/* <!-- What people are saying --> */}


<div className="col-lg-12 pt-5 pb-5 bg-dark text-light">
  <div id="client-testimonial-carousel" className="carousel slide" data-ride="carousel" style={{minHight:'200px'}}>
    <div className="carousel-inner" role="listbox">
		{/* <!-- <div className="shopper"><h3 className="shoppers">What our shoppers are saying about us</h3></div> --> */}
      <div className="carousel-item active text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> I'll like to commend your team on team on for the great customer service, you've definitely set the standard
          </p>
          <footer className="blockquote-footer pt-5"> Ola David (Lagos, Nigeria)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </p>
        </blockquote>
      </div>
      <div className="carousel-item text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> Am so much in love with your Euphorya design, It so beautiful. i received it today. Thank you for delivering on time.
          </p>
          <footer className="blockquote-footer pt-5"> Chima Obilor (New York, USA)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
      <div className="carousel-item text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> I just received my Ecstasy wear i love it!! it fits to perfection
          </p>
          <footer className="blockquote-footer pt-5"> Nonso Ebuka (Onitsha, Anambra)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
    </div>
    <ol className="carousel-indicators indicz">
      <li data-target="#client-testimonial-carousel" data-slide-to="0" className="active"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="1"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="2"></li>
    </ol>
  </div>
</div>
<div className="container-fluid">
  <div className="row instagram">
    <p className="miss" style={{marginTop:'60px'}}>don't miss that #StyleSteal</p>
    <p className="feed" style={style}>Shop our instagram feed</p>
    <button id="instaButton"> shop instagram </button>
  </div>
</div>


      

    </>
  )
}

export default Home
