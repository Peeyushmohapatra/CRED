import React from "react";
import Button from "../Button/Button";
import Common from "../Common";
import "./dog.css";

const Dog = () => {
  return (
    <div className="dog">
      <div className="small-Div">
        <Common
          ftext="security first."
          stext="and second."
          ttext="what’s yours remains only yours."
          frtext="CRED ensures that all your personal data and transactions are encrypted , and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any."
        />
        <Button
          data="Become a member"
          height="3.6rem"
          width="500px"
          background="white"
          marginTop="2rem"
        />
      </div>
    </div>
  );
};

export default Dog;
