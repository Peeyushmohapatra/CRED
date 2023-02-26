import React from 'react'
import "./button.css"

const Button = ({data,height,width,background,marginTop}) => {
  return (
    <>
    <button className='button' style={{height:height, width:width, backgroundColor:background,marginTop:marginTop}}>
        {data}
    </button>
    </>
  )
}

export default Button