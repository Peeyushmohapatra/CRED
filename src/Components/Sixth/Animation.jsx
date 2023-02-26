import { useState } from "react";
import "./animation.css";

let i = 0;

const Animation = () => {
  const [first, changeFn] = useState(
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png"
  );
  const imgArray = [
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
    "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
  ];

  setInterval(() => {
    i++;
    changeFn(imgArray[i % imgArray.length]);
  }, 4000);

  return (
    <div className="animation">
      <div className="textText">
        <p className="large">more cash</p>
        <p className="large">in your</p>
        <p className="large">pockets.</p>
        <div>
          <p className="small-line">
            switch to CRED RentPay and start paying rent with your credit
            <br /> card. this way you get up to 45 days of credit free period,
            more
            <br /> reward points and a happy landlord.
          </p>
        </div>
      </div>
      <div className="mobile">
        <div className="screen">
          <div className="mobileScreen">
            <img src={first} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
