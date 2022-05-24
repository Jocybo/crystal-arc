/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./navone.css"

const Navone = () => {
    return (
        <>
            <div className='row'>
                <div className="mt-2 col">
                    <span className='offset-5 me-5 text-uppercase text-secondary font-nunito'>Virtual Tour</span>
                    <span className='me-5 text-uppercase text-secondary font-nunito'>E-Catalog</span>
                    <span className='me-5 text-uppercase text-secondary font-nunito'>Follow us:</span>
                    <span className='offset-1 me-4 fw-bold text-uppercase'>+971527757562</span>
                </div>
            </div>
            <hr/>
            <div className='col'>
                <img src={require('../assests/header_logo.png')} className="logo offset-1" />
                <span className='offset-1 text-uppercase me-4 justify-content-evenly nunito-font'>home</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font'>about us</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font'>products</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font'>nakawa</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font'>blog</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font'>ca studio</span>
                <span className='text-uppercase me-4 justify-content-evenly nunito-font text-danger'>contact us</span>
                <a href='https://www.crystalarc.net/contact-us/index.html'><span className='text-uppercase quote'>get a quote</span></a>
            </div>
        </>
    )
}

export default Navone