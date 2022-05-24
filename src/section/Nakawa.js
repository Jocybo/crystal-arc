/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import './nakawa.css'

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      fade: true,
      autoplay: true,
    };
    return (
      <div className="row">
        <div className="col-4 section_nakawa">
          <Slider {...settings}>
            <div>
              <img src={require('../assests/nakawa/01.png')} className="banner image-fluid" />
            </div>
            <div>
              <img src={require('../assests/nakawa/DSC_3405.jpg')} className="banner image-fluid" />
            </div>
            <div>
              <img src={require('../assests/nakawa/DSC_6963.jpg')} className="banner image-fluid" />
            </div>
            <div>
              <img src={require('../assests/nakawa/lion.jpg')} className="banner image-fluid" />
            </div>
            <div>
              <img src={require('../assests/nakawa/Verghese_20111219__MG_1683.jpg')} className="banner image-fluid" />
            </div>
            <div>
              <img src={require('../assests/nakawa/WEDD_010.jpg')} className="banner image-fluid" />
            </div>
          </Slider>
        </div>
        <div className='col-5 section_collection'>
          <div className='who mb-1'>
            <span className='nunito-font text-uppercase who-we nunito-font-who'>our popuar arc</span>
          </div>
          <div className='mb-3 about'>
            <span className='text-uppercase'>nakawa collection</span>
          </div>
          <div>
            <p className='sub-head'>At Crystal Arc, we are always aiming to outdo ourselves by overwhelming our customers with exquisite designs.</p>
            <p className='sub-head'>NAKAWA, we believe, is the next level in terms of design and craftsmanship. Crystal Arc proudly brings you a sliver of elegance and standing true to its name; every Nakawa piece will bring an impeccable charm. Undoubtedly, Nakawa will enjoy a ubiquitous presence in homes, offices, hotels, or other businesses alike...</p>
          </div>
          <div className='mt-5'>
            <a href='https://www.crystalarc.net/nakawa-collections/index.html' className='read-more btn-outline-dark text-center'>Read More<span className='right-arrow'> &gt;</span> </a>
          </div>
        </div>
      </div>
    );
  }
}