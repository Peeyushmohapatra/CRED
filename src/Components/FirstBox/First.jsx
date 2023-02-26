import React from 'react'
import Button from '../Button/Button';
import Header from '../HeaderComp/Header';
import "./first.css";


const First = () => {
  return (
    <div className='firstDiv'>
        <Header/>
        <div className="contentContainer">
            <p className='bigContaint'>rewards for paying</p>
            <p className='bigContaint'>credit card bills.</p>
            <p className='small'>join 9M+ members who win rewards and cashbacks everyday</p>
            <Button data="Download CRED" height="3.5rem" width="17rem" background="white" marginTop="1.4rem"/>
        </div>
    </div>
  )
}

export default First