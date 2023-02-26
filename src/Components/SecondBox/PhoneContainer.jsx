import React from "react";
import "./PhoneContainer.css";
import img1 from "../../Img/phone-1.webp";
import img2 from "../../Img/phone-2.webp";
import img3 from "../../Img/phone-3.webp";
import img4 from "../../Img/phone-4.webp";
import img5 from "../../Img/phone-5.webp";


const PhoneContainer = () => {
  return (
    <div className="phoneContainer">
      <img className="image image1" src={img1} alt="" />
      <img className="image image5" src={img5} alt="" />
      <img className="image image2" src={img2} alt="" />
      <img className="image image4" src={img4} alt="" />
      <img className="image image3" src={img3} alt="" />
      
      

    </div>
  );
};

export default PhoneContainer;
