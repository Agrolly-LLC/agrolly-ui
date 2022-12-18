import React from "react";
import SolutionCard from "./SolutionCard";
import style from "./whatwedo.module.css";

const WhatWeDo = () => {
  return (
    <div style={{"textAlign":"center", "marginTop":"20px"}}>
         <h2>What we do</h2>
      <div className={style.whatWedoContainer}>
        <SolutionCard
          image={"asset/ipad.jpg"}
          title={"AGRI risk Score"}
          content={
            "Our risk evaluation uses technology from Agrolly's app and website to address one of the biggest challenges in the agricultural area: small farmer's access to quick and fair credit risk assessments."
          }
        />
        <SolutionCard
          image={"asset/cocoa.jpg"}
          title={"Farmers"}
          content={
            "Free or accessible use of the Agrolly App. Get access to climate forecast, Climatic Risk Zoning, market for production and services, forum, chat cultivation library, training video, among others"
          }
        />
        <SolutionCard
          image={"asset/agriculture.jpg"}
          title={"Online Service provision"}
          content={
            "Specialists in the field can offer their services on the app remotely, contact their customers, and organize their appointment scheduled by the platform, in addition to tracking all the activities carried out."
          }
        />
        <SolutionCard
          image={"asset/laboratory.jpg"}
          title={"Soil Testing"}
          content={
            "We simplify the soil analysis and soil testing by connecting farmers with soil test labs, making it easier, quicker and cost effective."
          }
        />
      </div>
    </div>
  );
};

export default WhatWeDo;

//asset/watering.jpg
//https://pixabay.com/
