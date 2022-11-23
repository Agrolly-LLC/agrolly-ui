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
            " Our risk evaluation uses technology from Agrolly's app and website to adress one of the biggest challenge in the agricultural area, the small farmer's access to a quick and fair credit risk assessment."
          }
        />
        <SolutionCard
          image={"asset/cocoa.jpg"}
          title={"Farmers"}
          content={
            "Free or acessible use of the Agrolly APP. Get access to climate forecast, Climatic Risk Zoning, market for production and services, forum, chat cultivation libaray, training video, among others"
          }
        />
        <SolutionCard
          image={"asset/agriculture.jpg"}
          title={"Online Service provision"}
          content={
            "Specialists in th field can offer their services on the app remotely, contact their customers and organize their appointmenet scheduled by the platform, in addition to tracking all the activities carried out"
          }
        />
        <SolutionCard
          image={"asset/laboratory.jpg"}
          title={"Soil Testing"}
          content={
            "We simplify the soil analyses soil testing by connecting farmers with soil test labs, making it easier, quicker and cost effective."
          }
        />
      </div>
    </div>
  );
};

export default WhatWeDo;

//asset/watering.jpg
//https://pixabay.com/
