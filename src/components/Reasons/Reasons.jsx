import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

// import soulpagelogo from "../../assets/soulpagelogo.png"

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        {/* <img src={soulpagelogo} alt="" /> */}
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>

      <div className="right-r">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span>choose us ?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coaches</span>
          </div>

          <div>
            <img src={tick} alt=""></img>
            <span>train smarter and faster than before</span>
          </div>

          <div>
            <img src={tick} alt=""></img>
            <span>1 free program for new member</span>
          </div>

          <div>
            <img src={tick} alt=""></img>
            <span>reliable partners</span>
          </div>
        </div>

        <span style={{ color: "grey", fontWeight: "normal" }}>
          our partners
        </span>
      </div>
    </div>
  );
};

export default Reasons;
