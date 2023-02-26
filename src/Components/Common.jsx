import React from "react";

const Common = ({ ftext, stext, ttext, frtext }) => {
  return (
    <div>
      <p className="big">{ftext}</p>
      <p className="big">{stext}</p>
      <div className="text-container">
        <p style={{overflow: "hidden"}} className="mediumm">{ttext}</p>
        <p className="smalll">
          {frtext}
        </p>
      </div>
    </div>
  );
};

export default Common;
