import React from 'react'
import product1 from '../assets/images/mobile.webp';

const Card = () => {
  return (
    <div className='gap-2 m-4'>
        <div className="bg-base-100 card shadow-xl w-96">
  <figure className='border m-4 p-8'><img src={product1} alt="Mobile" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mobile!</h2>
    <p>Mobile latest 5g and fast </p>
    <div className="card-actions gap-4 justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card