import React from "react";
import Button from "../Button/Button";
import "./Experience.css";


const Experience = () => {
  return (
    <div className="experience">
      <p className="big">we take your money</p>
      <p className="big">matters seriously.</p>
      <div className="text-container">
        <p className="mediumm">so that you don’t have to.</p>
        <p className="smalll">
          never miss a due date with reminders to help you pay your bills on
          time,<br/> instant settlements mean you never wait for your payments to go
          through<br/>  and statement analysis lets you know where your money goes,
          always.
        </p>
      </div>
      <Button data="Experience the upgrade" height="3.6rem" width="500px" background="white" marginTop="1.4rem"/>
    </div>
  );
};

export default Experience;
