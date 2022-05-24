/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      // dots: true,
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
      <div>
        <Slider {...settings}>
          <div>
            <img src={require('../assests/01_main-banner_02.jpg')} className="banner image-fluid" />
          </div>
          <div>
            <img src={require('../assests/02_main-banner_02.jpg')} className="banner image-fluid" />
          </div>
          <div>
            <img src={require('../assests/03_main-banner_02.jpg')} className="banner image-fluid" />
          </div>
          <div>
            <img src={require('../assests/04_main-banner_02.jpg')} className="banner image-fluid" />
          </div>
        </Slider>
      </div>
    );
  }
}