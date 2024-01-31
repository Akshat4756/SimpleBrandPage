import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <main className='hero container'>
        <div className='desc-container'>
            <h1 className='hero-heading'>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p className='hero-desc'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.  
            </p>
            <div className='hero-btn'>
                <button className='btn-shop'>Shop Now</button>
                <button className='btn-cat'>Category</button>
            </div>
            <p className='shopping'>
                Also available on
            </p>
            <div className='brand-icons'>
                <img src='/images/amazon.png'/>
                <img src='/images/flipkart.png'/>
            </div>
        </div>
        <div className='img-container'>
            <img src='/images/hero-image.png'/>
        </div>
    </main>
  )
}

export default Hero