import React from "react";
import Button from "../Button/Button";
import "./rating.css";

const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-store">
        <div className="rating-store-divv">
          <p className="bigg">4.8</p>
          <div className="para">
            <p>app</p>
            <p>store</p>
          </div>
        </div>

        <div className="rating-store-divv">
          <p className="bigg">4.7</p>
          <div className="para">
            <p>play</p>
            <p>store</p>
          </div>
        </div>
      </div>
      <div className="stars">
        <div className="appleStore">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
        <div className="appleStore">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
      </div>
      <div className="playStore">
        <Button
          data="Download the app"
          height="3.5rem"
          width="19rem"
          background="white"
          marginTop="1.4rem"
        />
        <Button
          data="Download the app"
          height="3.5rem"
          width="19rem"
          background="white"
          marginTop="1.4rem"
        />
      </div>

      <div className="people">
        <p>
          "this is a great app loaded with functionality and simplicity yet
          elegant and intuitive. a must have for the plastic money users. keeps
          me in financial discipline and helps me take the billing and payment
          worries out of my mind"<br/><br/> ranesh bhattacharya
        </p>
      </div>
    </div>
  );
};

export default Rating;
