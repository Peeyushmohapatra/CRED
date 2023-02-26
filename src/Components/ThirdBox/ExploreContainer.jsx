import React from "react";
import Button from "../Button/Button";
import "./ExploreContainer.css";


const ExploreContainer = () => {
  return (
    <div className="exploreContainer">
      <div className="container">
        <p className="big">feel special</p>
        <p className="big">more often.</p>
        <div>
          <p className="medium">exclusive rewards for paying your bills</p>
          <p className="small">
            every time you pay your credit card bills on CRED, you receive CRED
            coins. you can use these to win exclusive rewards or get special
            access to curated products and experiences. on CRED, good begets
            good.
          </p>
        </div>
        <Button data="Explore rewards" height="3.5rem" width="17rem" background="white" marginTop="1.4rem"/>
      </div>
    </div>
  );
};

export default ExploreContainer;
