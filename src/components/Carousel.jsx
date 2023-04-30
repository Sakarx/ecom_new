import React from 'react'
import image1 from '../assets/images/banner1.jpg';
import image2 from '../assets/images/banner2.webp';
import image3 from '../assets/images/banner3.jpg';


const Carousel = () => {
  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full" />
    <div className="-translate-y-1/2 absolute flex justify-between left-5 right-5 top-1/2 transform">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full" />
    <div className="-translate-y-1/2 absolute flex justify-between left-5 right-5 top-1/2 transform">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full" />
    <div className="-translate-y-1/2 absolute flex justify-between left-5 right-5 top-1/2 transform">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
    </div>
  )
}

export default Carousel