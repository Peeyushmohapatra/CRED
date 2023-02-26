import React from "react";
import Creater from "../Paragraph-creator/Creater";
import SmallCreartor from "../Paragraph-creator/SmallCreartor";

import "./about.css";

const About = () => {
  return (
    <div className="aboutCred">
      <div className="upperContainer">
        <Creater text="about CRED" />
        <div>
          <SmallCreartor text="CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time." />
          <SmallCreartor text="CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on" />
          <SmallCreartor text="CRED." />
        </div>
      </div>

      <div className="upperContainer">
        <Creater text="how does CRED reward their users?" />
        <div>
          <SmallCreartor text="CRED partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit" />
          <SmallCreartor text="card bill payment cycle." />
        </div>
      </div>

      <div className="upperContainer">
        <Creater text="how to earn rewards on CRED??" />
        <div>
          <SmallCreartor text="members can earn rewards in two different ways. CRED coins & gems." />
          <SmallCreartor text="CRED Coin Rewards:" />
          <SmallCreartor text="- when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin." />
          <SmallCreartor text="- you can then use earned CRED coins to claim exclusive rewards from different brands." />
          <SmallCreartor text="CRED Gem Rewards:" />
          <SmallCreartor text="- for every person that you refer to CRED who makes a bill payment, you earn 10 gems." />
        </div>
      </div>

      <div className="upperContainer">
        <Creater text="banks supported on CRED" />
        <div>
          <SmallCreartor text="CRED supports credit card bill payment for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL" />
          <SmallCreartor text="PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards." />
        </div>
      </div>
    </div>
  );
};

export default About;
