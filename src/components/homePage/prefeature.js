import React, { useState } from "react";
import style from "./prefeature.module.css";

import Annualy from "../../Image/phoneImage/annualy.png";
import CropManagement from "../../Image/phoneImage/sugguestion.png";
import Comments from "../../Image/phoneImage/comments.png";

function Prefeature() {
  const [slide, setSlide] = useState(1);

  return (
    <div id="feature" className={style.fetureContener}>
      <div className={style.featureExplain}>
        <div
          className={
            slide === 1 ? style.featureExplainContent : style.featureDisplayNone
          }
        >
          <div className={style.featureimageContener}>
            <img src={Annualy} alt="" />
          </div>
          <div className={style.featureContent}>
            <h2>Weather Module</h2>
            <p>
              Farmers can access this feature on stand-alone basis on the app or
              integrated with the Crop Management functionality. Weather
              forecast modeling is based on Agrolly’s own algorithms leveraging
              from five years historical database, which provides tailored
              output to the farmer’s specific location on a daily basis for up
              to one year. Based on field observations in Brazil, India and
              Mongolia, Agrolly identified that most farmers do not have free
              access to a one-year rainfall forecast, nor have the information
              available on their language. What makes this feature unique and
              special about Agrolly it that it runs forecasts for small
              locations (sometimes cities with fewer than 5000 inhabitants),
              which could be either unavailable on web-based weather forecast
              platforms or available for very short period.
            </p>
          </div>
        </div>
        <div
          className={
            slide === 2 ? style.featureExplainContent : style.featureDisplayNone
          }
        >
          <div className={style.featureimageContener}>
            <img src={CropManagement} alt="" />
          </div>
          <div className={style.featureContent}>
            <h2>Agriculture Climate Risk</h2>
            <p>
              It is very important for farmers to understand their location’s
              climate trends for the long run and wisely decide what to plant
              for the next few years. However, it is not an easy perspective for
              rural farmers, so the Agrolly team is helping farmers by
              presenting them the crop growing analysis based on their
              location-specific weather data. Agrolly’s long-term weather and
              rainfall prediction models generate a list of crops that rural
              farmers should try and plant in their communities based on their
              unique climate conditions.
            </p>
          </div>
        </div>

        <div
          className={
            slide === 3 ? style.featureExplainContent : style.featureDisplayNone
          }
        >
          <div className={style.featureimageContener}>
            <img src={Comments} alt="" />
          </div>
          <div className={style.featureContent}>
            <h2>Farmer’s Forum </h2>
            <p>
              Forum for farmers. Have an agricultural question, but don’t know
              where or who to ask? Agrolly provides a communication platform
              forum based on the farmer’s location, where farmers, experts,
              students and companies can help you. Agrolly aims with this module
              to increase the interaction of the farming community, leveraging
              their integration, and facilitating the exchange of information.
              IBM’s Technology used: IBM storage
            </p>
          </div>
        </div>
      </div>
      <div className={style.featureButtonContainer}>
        <button style={{ background: "#4b5453" }} onClick={() => setSlide(1)}>
          Weather Module
        </button>
        <button style={{ background: "#667662" }} onClick={() => setSlide(2)}>
          Agriculture Climate Risk
        </button>
        <button style={{ background: "#abb36f" }} onClick={() => setSlide(3)}>
          Farmer’s Forum{" "}
        </button>
      </div>
    </div>
  );
}

export default Prefeature;
