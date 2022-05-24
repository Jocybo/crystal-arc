/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import './bestseller.css'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "2px",
      slidesToShow: 5,
      speed: 1000,
      autoplay : true,
    };
    return (
      <div>
         <div className='text-center'>
            <span className='text-uppercase meet'>meet</span>
        </div>
        <div className='text-center mb-5'>
            <span className='text-uppercase best'>our best sellers</span>
        </div>
        <Slider {...settings}>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">Clock Wedding gift</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">crystal kaba with 99 names</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
          <div>
            <img src={require('../assests/header_logo.png')} className="img_box"/>
            <span className="model_view text-uppercase text-center">3D model building</span>
          </div>
        </Slider>

        <div className="text-center mt-5 find_hover">
          <div>
        <a href='https://www.crystalarc.net/products/index.html' className='btn-outline-dark btn btn-lg'><span className="find_more">Find Out More<span className='right-arrow'> &gt;</span></span></a>
          </div>
        </div>

      </div>
    );
  }
}