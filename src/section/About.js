/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./about.css"


const About = () => {
  return (
      <div className='row section_about'>
        <div className='col-6'>
          <div className='who mb-1'>
            <span className='nunito-font text-uppercase who-we nunito-font-who'>Who we are</span>
          </div>
          <div className='mb-3 about'>
            <span className='text-uppercase'>about crystal arc</span>
          </div>
          <div>
            <p className='sub-head'>Crystal Arc LLC is one of the leading pioneers and manufacturers of Crystal ware. We have an ISO Certified factory, procuring the finest raw material from Europe and with 180 craftsmen and in-house designers give life and shape to crystal by hand crafting and customizing as per requirement.</p>
            <p className='sub-head'>Our products range from Tableware, Glassware, Vases, Islamic Creations, Miniatures of Landmark Buildings, Laser Engraving, Crystal Gifts, Trophies & Plaques ...</p>
          </div>
          <div className='mt-5'>
          <a href='https://www.crystalarc.net/about-us/index.html' className='read-more btn-outline-dark text-center'>Read More<span className='right-arrow'> &gt;</span> </a>
          </div>
        </div>
        <div className='col-6'>
        </div>
      </div>
  )
}

export default About