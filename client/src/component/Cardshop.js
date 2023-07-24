import React, { useState } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
// import Navbarr from './Navbarr'
import Carrousel from './Carrousel'



function Cardshop() {
const [counter, setcounter] = useState(0)


  return (
    <div className='APP'>
         
  


<Carrousel/>

        <div className="row mbn-20">

        {/*Single Product Images Start*/}
        <div className="col-lg-6 col-12 mb-20">
          <div className="single-product-images">
            {/*Single Product Image Start*/}
            <div className="single-product-image slick-initialized slick-slider">
              <div className="slick-list">
            <div className="slick-track" style={{opacity: 1, width: '5126px', transform: 'translate3d(-466px, 0px, 0px)'}}>
            <div className="slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} 
            style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div>
            <img src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-1.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div>
 <img role="presentation" alt="" 
 src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-thumb-2.jpg"
             className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div>
            <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: '466px', position: 'relative', overflow: 'hidden'}}>
              <div><img src="assets/images/products/single-product-1.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div>
            <img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-1.jpg" className="zoomImg" style={{position: 'absolute', top: '-95.2548px', left: '-81.3605px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-2.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-2.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-3.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-3.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-4.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-4.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-5.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-5.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide slick-cloned" data-slick-index={5} id aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-1.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-1.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide slick-cloned" data-slick-index={6} id aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-2.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-2.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide slick-cloned" data-slick-index={7} id aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-3.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-3.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide slick-cloned" data-slick-index={8} id aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-4.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div><img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-4.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div><div className="slick-slide slick-cloned" data-slick-index={9} id aria-hidden="true" tabIndex={-1} style={{width: '466px', position: 'relative', overflow: 'hidden'}}><div><img src="assets/images/products/single-product-5.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div>
            <img role="presentation" alt="" src="https://htmldemo.net/garcia/garcia/assets/images/products/single-product-5.jpg" className="zoomImg" style={{position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '1000px', height: '1000px', border: 'none', maxWidth: 'none', maxHeight: 'none'}} /></div></div></div></div>
            {/*Single Product Image End*/}
            {/*Single Product Thumb Start*/}
            <div className="single-product-thumb slick-initialized slick-slider slick-vertical">
            <button className="slick-prev slick-arrow" style={{}}><i class="fa-solid fa-caret-up"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg></i>
            </button>
            <div className="slick-list draggable" style={{height: '412px'}}><div className="slick-track" style={{opacity: 1, height: '1442px', transform: 'translate3d(0px, -412px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-4} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-2.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div>
            <div className="slick-slide slick-cloned" data-slick-index={-3} id aria-hidden="true" tabIndex={-1}
             style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-3.jpg" alt="" 
             style={{width: '100%', display: 'inline-block'}} /></div></div>
             <div className="slick-slide slick-cloned" data-slick-index={-2} id aria-hidden="true" tabIndex={-1} 
             style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-4.jpg" alt=""
              style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-5.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div>
            <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" 
            style={{width: '97px'}}><div>
              <img src="assets/images/products/single-product-thumb-1.jpg" alt="" 
            style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-active" 
            data-slick-index={1} aria-hidden="false" style={{width: '97px'}}><div>
            <img src="assets/images/products/single-product-thumb-2.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: '97px'}}><div>
              <img src="assets/images/products/single-product-thumb-3.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{width: '97px'}}><div>
                <img src="assets/images/products/single-product-thumb-4.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-5.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={5} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div>
                  <img src="assets/images/products/single-product-thumb-1.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={6} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-2.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={7} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-3.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={8} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-4.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div><div className="slick-slide slick-cloned" data-slick-index={9} id aria-hidden="true" tabIndex={-1} style={{width: '97px'}}><div><img src="assets/images/products/single-product-thumb-5.jpg" alt="" style={{width: '100%', display: 'inline-block'}} /></div></div></div></div><button className="slick-next slick-arrow" style={{}}>
                  <i class="fa-solid fa-caret-up"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg></i></button></div>
            {/*Single Product Thumb End*/}
          </div>
        </div>
        {/*Single Product Image End*/}
        {/*Single Product Content Start*/}
        <div className="col-lg-6 col-12 mb-20">
          <div className="single-product-content">
            {/*Title & Price Start*/}
            <div className="title-price">
              <h2 className="title">Camera Pro 440</h2>
              <span className="price">1011,18 dt</span>
            </div>
            {/*Title & Price End*/}
            {/*Ratting Start*/}
            <div className="ratting">
              <div className="inner">
                
                <span><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
</span>
              </div>
            </div>
            {/*Ratting End*/}
            {/*Description Start*/}
            <div className="desc">
              <h5>Specifications</h5>
              <ul>
                <li>Multimedia Speakers</li>
                <li>120 watts peak</li>
                <li>Front-facing subwoofer</li>
                <li>Records 4K/30fps (60mbps), 1080p/120fps, 720p/240fps video</li>
                <li>Built-in 2.19″ LCD touchscreen</li>
                <li>Gorilla Glass Retina</li>
              </ul>
            </div>
            {/*Description End*/}
            {/*Quantity Start*/}
            <div className="quantity">
              <h5>Quantity:</h5>
              <div className="pro-qty">
                <button className="dec qtybtn" onClick={()=> setcounter(counter + 1)}>-</button>
                <input type="text" defaultValue={1} />
                <span className="inc qtybtn" onClick={()=> setcounter(counter - 1)}>+</span></div>
            </div>
            {/*Quantity End*/}
            {/*Action Start*/}
            <div className="action">
              <a href="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></a>
              <a href="#" className="action-btn action-wishlist"><i class="fa-solid fa-heart" style={{color: "#f11e1e",}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></a>
              <a href="#" className="action-btn action-compare"><i class="fa-solid fa-rotate-right">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
       <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg></i></a>
            </div>
            {/*Action End*/}
            {/*Share Start*/}
            <div className="share">
              <h5>Share:</h5>
              <a href="#"><i class="fa-brands fa-facebook" style={{color: "#154dac",}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></i></a>
              <a href="#"><i class="fa-brands fa-tiktok"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></i></a>
              <a href="#"><i class="fa-brands fa-instagram"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
 <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></i></a>
              <a href="#"><i class="fa-brands fa-google-plus-g"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
  <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"/></svg></i></a>
            </div>
            {/*Share End*/}
          </div>
        </div>
        {/*Single Product Content End*/}
      
      </div>













      {/* cart shop */}


      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*Cart Table Start*/}
              <form action="#">
                <div className="cart-table table-responsive mb-30">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="single-product.html"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/cart-product-1.jpg" /></a></td>
                        <td><a href="single-product.html">Camera Pro 440</a></td>
                        <td><span>1011,18 d</span></td>
                        <td>
                          <div className="pro-qty"><span className="dec qtybtn">-</span><input type="text" defaultValue={1} /><span className="inc qtybtn">+</span></div>
                        </td>
                        <td><span>1011,18 dt</span></td>
                        <td><a href="#"><i class="fa-solid fa-trash-can"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></i></a></td>
                      </tr>
                      <tr>
                        <td><a href="single-product.html"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/cart-product-2.jpg" alt="Product" /></a></td>
                        <td><a href="single-product.html">Red Digital Camera</a></td>
                        <td><span>1885,72 dt</span></td>
                        <td>
                          <div className="pro-qty"><span className="dec qtybtn">-</span><input type="text" defaultValue={1} /><span className="inc qtybtn">+</span></div>
                        </td>
                        <td><span>1885,72 dt</span></td>
                        <td><a href="#"><i class="fa-solid fa-trash-can"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></i></a></td>
                      </tr>
                      <tr>
                        <td><a href="single-product.html"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/cart-product-3.jpg" alt="Product" /></a></td>
                        <td><a href="single-product.html">Axor Digital camera</a></td>
                        <td><span>1011,18 dt</span></td>
                        <td>
                          <div className="pro-qty"><span className="dec qtybtn">-</span><input type="text" defaultValue={1} /><span className="inc qtybtn">+</span></div>
                        </td>
                        <td><span>1011,18dt</span></td>
                        <td><a href="#"><i class="fa-solid fa-trash-can"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></i></a></td>
                      </tr>
                      <tr>
                        <td><a href="single-product.html"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/cart-product-4.jpg" alt="Product" /></a></td>
                        <td><a href="single-product.html">Neko Digital Camera</a></td>
                        <td><span>683,22 dt</span></td>
                        <td>
                          <div className="pro-qty"><span className="dec qtybtn">-</span>
                          <input type="text" defaultValue={1} /><span className="inc qtybtn">+</span></div>
                        </td>
                        <td><span>683,22 dt</span></td>
                        <td><a href="#"><i class="fa-solid fa-trash-can"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></i></a></td>
                      </tr>

                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td></td>
                        <td><b>TOTAL PRICE</b></td>
                        <td>0000</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </form>
              {/*Cart Table End*/}
              
              </div>
            </div>
          </div>
          </div>








          </div>
  )
}

export default Cardshop