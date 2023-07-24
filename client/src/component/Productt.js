
import React from 'react'
import "./Product.css"
import Footer from './Footer'
import { Link } from 'react-router-dom'
 




function Productt() {
  return (
    <div>
      
        <div className="main-wrapper">
        {/* Header Section Start */}
       
       
        <div className="section section-wide section-padding">
          <div className="container-fluid">
            <div className="row mbn-30">
              {/*Banner Start*/}
              <div className="col-sm-6 col-12 mb-30">
                <div className="banner">
                  <Link to="#"><img src="https://htmldemo.net/garcia/garcia/assets/images/banner/banner-10.jpg" alt="Banner" /></Link>
                </div>
              </div>
              {/*Banner End*/}
              {/*Banner Start*/}
              <div className="col-sm-6 col-12 mb-30">
                <div className="banner">
                  <Link to="#"><img src="https://htmldemo.net/garcia/garcia/assets/images/banner/banner-11.jpg" /></Link>
                </div>
              </div>
              {/*Banner 11111111  End */}
            </div>
          </div>
        </div>
        {/*Banner 222222 Section End*/}
        {/*Propular Products Section Start*/}
        <div className="section section-padding pt-0">
          <div className="container">
            <div className="row mbn-40">
              {/*Section Title Start*/}
              <div className="col-12">
                <div className="section-title">
                  <h2 className="title">Popular in this week</h2>
                </div>
                {/* <div> <Addprod/></div> */}
              </div>

              

              {/*Section Title End*/}
              {/*Product Wrapper Start*/}
              <div className="col-12 mb-40">
                <div className="masonry-wrap row row-10 mbn-20" style={{position: 'relative', height: '603.812px'}}>
                  {/*Masonry Sizer Start*/}
                  <div className="masonry-sizer col-1" />
                  {/*Masonry Sizer End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-6 col-12 mb-20" style={{position: 'absolute', left: '0%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link to="/cardshop" className="image">
<img src="https://htmldemo.net/garcia/garcia/assets/images/products/product2-1.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Red Digital Camera</Link></h4>
                          <span className="price">918,99 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
<span style={{width: '92%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i>
<i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '49.9947%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop">
                          <img src="https://htmldemo.net/garcia/garcia/assets/images/products/product2-2.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Puls Coolpix SS3</Link></h4>
                          <span className="price">737,88 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
<span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i className="icofont-shopping-cart" /></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '74.992%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop">
                          <img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-8.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Puls Coolpix SS3</Link></h4>
                          <span className="price">737,88 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '0%', top: '300.609px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop">
                          <img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-6.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Polaid camera 300</Link></h4>
                          <span className="price">1113,67 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i className="icofont-shopping-cart" /></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '24.9973%', top: '300.609px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop">
                          <img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-1.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                          <span className="label sale">Sale</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Camera Pro 440</Link></h4>
                          <span className="price">1011,18 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '74.992%', top: '301.25px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-4.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                          <span className="label sale">Sale</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Neko Digital Camera</Link></h4>
                          <span className="price">683,22 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                </div>
              </div>
              {/*Product Wrapper End*/}
            </div>
          </div>
        </div>
        {/*Propular Products 33333333 Section End*/}
        {/*Banner Section Start*/}
        <div className="section section-wide section-padding pt-0">
          <div className="container-fluid">
            <div className="row gx-0">
              {/*Banner Start*/}
              <div className="col-sm-3 col-6">
                <div className="banner">
                  <Link to="#"><img src="https://htmldemo.net/garcia/garcia/assets/images/banner/banner-12.jpg" alt="Banner" /></Link>
                </div>
              </div>
              {/*Banner End*/}
              {/*Banner Start*/}
              <div className="col-sm-3 col-6 order-sm-3">
                <div className="banner">
                  <Link to="#"><img src="https://htmldemo.net/garcia/garcia/assets/images/banner/banner-13.jpg" alt="Banner" /></Link>
                </div>
              </div>
              {/*Banner End*/}
              {/*Banner Start*/}
              <div className="col-sm-6 col-12">
                <div className="banner">
                  <Link to="#"><img src="https://htmldemo.net/garcia/garcia/assets/images/banner/banner-14.jpg" /></Link>
                </div>
              </div>
              {/*Banner End*/}
            </div>
          </div>
        </div>
        {/*Banner 44444444 Section End*/}
        {/*Featured Products Section Start*/}
        <div className="section section-padding pt-0">
          <div className="container">
            <div className="row mbn-40">
              {/*Section Title Start*/}
              <div className="col-12">
                <div className="section-title">
                  <h2 className="title">Featured Products</h2>
                </div>
              </div>
              {/*Section Title End*/}
              {/*Product Wrapper Start*/}
              <div className="col-12 mb-40">
                <div className="masonry-wrap row row-10 mbn-20" style={{position: 'relative', height: '603.812px'}}>
                  {/*Masonry Sizer Start*/}
                  <div className="masonry-sizer col-1" />
                  {/*Masonry Sizer End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-6 col-12 mb-20" style={{position: 'absolute', left: '0%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product2-3.jpg" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Red Digital Camera</Link></h4>
                          <span className="price">918,99 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '49.9947%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product2-4.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Puls Coolpix SS3</Link></h4>
                          <span className="price">737,88 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '74.992%', top: '0px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-14.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Relar ProPlus 110</Link></h4>
                          <span className="price">1113,67 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '0%', top: '300.609px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-11.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Axor Digital camera (Pink)</Link></h4>
                          <span className="price">1011,18 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '24.9973%', top: '300.609px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="/cardshop"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-7.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                          <span className="label sale">Sale</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Retro Pro 600</Link></h4>
                          <span className="price">977,02 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                  {/*Product Start*/}
                  <div className="masonry-item col-lg-3 col-sm-6 col-12 mb-20" style={{position: 'absolute', left: '74.992%', top: '301.25px'}}>
                    <div className="product-2">
                      {/*Image & Action Start*/}
                      <div className="image-action">
                        <Link className="image" to="Cardshop.js"><img src="https://htmldemo.net/garcia/garcia/assets/images/products/product-15.jpg" alt="" /></Link>
                        <div className="labels">
                          <span className="label new">New</span>
                          <span className="label sale">Sale</span>
                        </div>
                        <Link to="#" className="wishlist-btn"><i className="icofont-heart" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></i></Link>
                      </div>
                      {/*Image & Action End*/}
                      {/*Content Start*/}
                      <div className="content">
                        {/*Title & Price Start*/}
                        <div className="title-price">
                          <h4 className="title"><Link to="/cardshop">Smart 4K Camera</Link></h4>
                          <span className="price">2049,73 dt</span>
                        </div>
                        {/*Title & Price End*/}
                        {/*Ratting Start*/}
                        <div className="ratting">
                          <div className="inner">
                          <span style={{width: '95%'}}>
  <i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i><i class="fa-solid fa-star"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></i></span>
                          </div>
                        </div>
                        {/*Ratting End*/}
                        {/*Action Start*/}
                        <div className="action">
                          <Link to="#" className="action-btn action-quickview"><i className="icofont-search-1" /></Link>
                          <Link to="#" className="action-btn action-cart"><i className="icofont-shopping-cart" /><i class="fa-solid fa-cart-shopping"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></i></Link>
                          <Link to="#" className="action-btn action-compare"><i className="icofont-refresh" /></Link>
                        </div>
                        {/*Action End*/}
                      </div>
                      {/*Content End*/}
                    </div>
                  </div>
                  {/*Product End*/}
                </div>
              </div>
              {/*Product Wrapper End*/}
            </div>
          </div>
        </div>
        {/*Featured Products Section End*/}
        {/*Subscribe Section Start*/}
        
      <div className="subscribe-section section">
        {/*Subscribe Content Start*/}
        <div className="subscribe-content">
          <h2 className="title">Subscribe our Newsletter<span>Get update for news, offers</span></h2>
          <form id="mc-form" className="mc-form subscribe-form" noValidate="true">
            <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email here" name="EMAIL" />
            <button id="mc-submit"><i className="fa fa-paper-plane-o" /></button>
          </form>
          {/* mailchimp-alerts Start */}
          <div className="mailchimp-alerts text-centre">
            <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
            <div className="mailchimp-success" />{/* mailchimp-success end */}
            <div className="mailchimp-error" />{/* mailchimp-error end */}
          </div>{/* mailchimp-alerts end */}
        </div>
        {/*Subscribe Content End*/}
      </div>
        {/*Subscribe Section End*/}
        {/*Service/Feature Section Start*/}
        <div className="section section-wide section-padding">
          <div className="container-fluid">
            <div className="row mbn-30">
              <div className="service col-xl-3 col-md-6 col-12 mb-30">
                <div className="icon" />
                <div className="content">
                  <h3>Free home delivery</h3>
                  <p>Provide free home delivery for the all product over $100</p>
                </div>
              </div>
              <div className="service col-xl-3 col-md-6 col-12 mb-30">
                <div className="icon" />
                <div className="content">
                  <h3>Quality Products</h3>
                  <p>We ensure the product quality that is our main goal</p>
                </div>
              </div>
              <div className="service col-xl-3 col-md-6 col-12 mb-30">
                <div className="icon" />
                <div className="content">
                  <h3>3 Days Return</h3>
                  <p>Our Return Policy is very simple and easy for all</p>
                </div>
              </div>
              <div className="service col-xl-3 col-md-6 col-12 mb-30">
                <div className="icon" />
                <div className="content">
                  <h3>Online Support</h3>
                  <p>Provide 24/7 online support for any information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Service/Feature Section End*/}
      
      </div>
      
      <div className='footer'> <Footer/> </div>
</div>
  )
}

export default Productt