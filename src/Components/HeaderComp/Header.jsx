import React from 'react'
import "./header.css"
// import Credimg from "../../Img/cred-logo.webp"

const Header = () => {
  return (
    <div className='header'>
        <div className='innerDiv'>
            <img className='img' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="" srcset="" />
            <div className='listContainer'>
                <ul>
                    <li>credit score check</li>
                    <li>CRED pay</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header