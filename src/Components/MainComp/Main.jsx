import React from "react";
import About from "../About-cred/About";
import Green from "../Eigth/Green";

import Experience from "../Fifth/Experience";
import Lastpage from "../FinalPage/Lastpage";
import First from "../FirstBox/First";
import Brands from "../Forth/Brands";
import Rating from "../Rating/Rating";
import PhoneContainer from "../SecondBox/PhoneContainer";
import Dog from "../Seventh/Dog";
import Animation from "../Sixth/Animation";
import ExploreContainer from "../ThirdBox/ExploreContainer";







import "./mainComp.css";

const Main = () => {

  return (
    <div className="main">
      <First />
      <PhoneContainer />
      <ExploreContainer />
      <Brands />
      <Experience />
      <Animation/>
      <Dog/>
      <Green/>
      <Rating/>
      <About/>
      <Lastpage/>
    </div>
  );
};

export default Main;
