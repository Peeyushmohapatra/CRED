import React from "react";
import Creater from "../Paragraph-creator/Creater";
import SmallCreartor from "../Paragraph-creator/SmallCreartor";
import "./lastpage.css";

const Lastpage = () => {
  return (
    <div className="finalePage">
      <div className="leftSide">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
          alt=""
        />
        <img
          className="iso"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
          alt=""
        />

        <div className="texxtContainer">
          <Creater text="complete security. no asterisks." />

          <div>
            <SmallCreartor text="CRED encrypts all data and transactions to ensure a" />
            <SmallCreartor text="completely secure experience for our members." />
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="topLeft">
          <div className="dabaOne">
            <Creater text="products" />
            <SmallCreartor text="CRED pay" />
            <SmallCreartor text="credit score check" />
          </div>
          <div className="dabaTwo">
            <Creater text="CRED" />
            <SmallCreartor text="about" />
            <SmallCreartor text="careers" />
            <SmallCreartor text="IPL" />
            <SmallCreartor text="customer care" />
          </div>
        </div>
        <div className="bottomLeft">
          <div className="dabaOne">
            <Creater text="resources" />
            <SmallCreartor text="articles" />
            <SmallCreartor text="blogs" />
            <SmallCreartor text="calculators" />
            <SmallCreartor text="credit card payment" />
            <SmallCreartor text="guide" />
            <SmallCreartor text="credit score guide" />
          </div>
          <div className="dabaTwo">
            <Creater text="policy" />
            <SmallCreartor text="security" />
            <SmallCreartor text="transaction & user verification" />
            <SmallCreartor text="google API disclosure" />
            <SmallCreartor text="UPI faq & grievances" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
