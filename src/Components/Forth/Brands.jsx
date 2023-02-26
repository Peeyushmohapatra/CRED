import React from 'react'
import "./brand.css"
import img from "../../Img/Brand-img.png"

const Brands = () => {
  return (
    <div className='brand'>
        <p>rewards from brands you love.</p>
        <div className='brands-container'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Brands