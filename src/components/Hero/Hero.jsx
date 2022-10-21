import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

// these imports are for right side
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        {/* for header */}
        <Header />

        {/* for the ad */}
        <div className="the-best-ad">
          <div></div>
          <span>You can feel the results</span>
        </div>

        {/* for the text below ad i.e hero text */}
        <div className="hero-text">
          <div>
            <span> Shape</span>
            <span> your</span>
          </div>

          <div>
            <span className="stroke-text">ideal body</span>
          </div>

          <div>
            <span className="textbelowidealbody">
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* for figures below text of below ideal body */}
        <div className="experiencefigures">
          <div>
            <span>140+</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>978+</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>50+</span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* buttons below experiencefigures */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        {/* for join now button */}
        <button className="btn">Join now</button>

        {/* for heart rate */}
        <div className="heart-rate">
          <img src={Heart} alt="heartlogo" />
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </div>

        {/* for hero */}
        <img src={Hero_image} alt="heroimage" className="hero-image" />

        {/* for hero back */}
        <img
          src={Hero_image_back}
          alt="heroimageback"
          className="hero-image-back"/>

        {/* for calories */}
        <div className="Calories">
         <img src={Calories} alt="calories"  />

         <div>
          <span>Calories Burned</span>
          <span>260 kcal</span>
         </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
