import React, { Component } from "react";
import ForcaseImage from "../../../Image/TechPageImage/FunctionImage.png";
import ForumImage from "../../../Image/TechPageImage/PhoneImage.png";
import RiskManagement from "../../../Image/TechPageImage/DesktopImage.png";

import Footer from "../../footer/footer";
import style from "./technology.module.css";

export default class technology extends Component {
  render() {
    return (
      <div>
        <section id="weather" className={style.FocaseSection}>
          <div>
            <h1>weather forcase</h1>
            <p className={style.featureContent}>
              With the IBM weather company data and NASA’s weather historical
              data, Agrolly is capable of predicting and generating the weekly
              and annual weather forecast for the location of the farmers.
            </p>
            <ul>
              <li className={style.featureContent}>
                Weekly weather forecast (short-term prediction)
              </li>
              <li className={style.featureContent}>
                Annual weather forecast (long-term prediction)
              </li>
            </ul>
          </div>
          <div className={style.ForcaseImage}>
            <img src={ForcaseImage} alt="Forcase" />
          </div>
        </section>

        <section id="Forum" className={style.ForumSection}>
          <div className={style.ForumImage}>
            <img src={ForumImage} alt="Forum" />
          </div>
          <div>
            <h1>Farmer forum</h1>
            <p className={style.featureContent}>
              Farmers struggle to find out the answers to certain questions.
              Farmers are not alone. Agrolly provides farmers with window where
              they can connect to other farmers and experts so that they can ask
              questions and obtain answers that they wanted in regards with the
              farming. Farmers can tap to the Forum function and start engaging
              with each other free of charge.{" "}
            </p>
          </div>
        </section>

        <section id="riskManagement" className={style.RickSection}>
          <div>
            <h1>Risk management system</h1>
            <p className={style.featureContent}>
              The biggest competitive advantage of Agrolly is that the feature
              of suggestion of planting the right crop in the right place and
              right time. With our long-term weather forecast and crop
              plantation data, we generate the recommendation of crops for
              specific locations and also maintenance know-how for the crops so
              that farmers will be able to reduce the related risks.
            </p>
          </div>
          <div className={style.ForcaseImage}>
            <img src={RiskManagement} alt="Risk Management" />
          </div>
        </section>

        <section className={style.Disclaimer}>
          <p>
            The information contained in this website (agrolly.com or
            agrolly.tech) and Agrolly’app is for general information purposes
            only and is provided using sources from The Weather Forecast (short
            term forecast); Nasa (Weather history) and Agrolly (Crop risk and
            Long-Term weather forecast). While we endeavour to keep the
            information up to date and correct, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability or availability with respect to
            the website or the information, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk. You need to
            make your own enquiries to determine if the information or services
            are appropriate for your intended use. In no event will we be liable
            for any loss or damage including without limitation, indirect or
            consequential loss or damage, or any loss or damage whatsoever
            arising from loss of data or profits arising out of, or in
            connection with, the use of this website.
          </p>
        </section>

        <Footer />
      </div>
    );
  }
}
