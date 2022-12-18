import React, { Component } from "react";
import style from "./homepage.module.css";

import Footer from "../footer/footer";
import Feature from "./prefeature";
import CountryButoon from "./countrybutton";
import HomepageWorldNews from "./homepageWorldNews";
import News from "./agrollynews";
import logo from "../../Image/Agrolly/newlogo.png";

import Partnerlogo from "./partnerlogo";
import { withTranslation } from "react-i18next";
import AgrCredit from "./AgrCredit";
import NumbersCard from "./NumbersCard";
import WhatWeDo from "./WhatWeDo";

class homePage extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <section className={style.cover}>
          <div className="row">
            <div className={`col-md-6 ${style.titletext}`}>
              <h1>
                Helping farmers to effectively plant the right crops in the
                right place and weather
              </h1>
              {/* <button
                type="button"
                className={`btn btn-dark btn-lg ${style.googlebtn}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.coakum.agrolly";
                }}
              >
                <i className="fab fa-google-play"></i>
                {t("download.1")}
              </button> */}
              <button
                type="button"
                className={`btn btn-dark btn-lg ${style.googlebtn}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://www.youtube.com/watch?v=VT4RKHwQ1hQ&feature=youtu.be";
                }}
              >
                <i className="fas fa-film"></i> {t("video.1")}
              </button>
            </div>
          </div>
        </section>

        <section className={style.agrollyAffiliates}>
          <h3>{t("agrolly-affiliates.1")}</h3>
          <CountryButoon />
        </section>

        <section className={style.agrollyDescription}>
          <div style={{ textAlign: "center" }}>
            <img style={{height:"200px"}} src={logo} alt="agolly logo" />
          </div>
          <div className={style.agrollyDescriptionContent}>
            <h1>What is Agrolly?</h1>
            {/* <h3>Agrolly is a application supporting rural household farmers in emerging markets fight against climate change, handle the crop risk, building an extensive knowlege, and establish a wide range of networking</h3> */}
            <h3>
            Agrolly is a solution that helps rural household farmers to fight climate change. Its technology helps farmers to assess risk, gain farming knowledge, and get to know each other using the forum feature available on our platform. Agrolly provides open-source solutions and local connections to the country.
            </h3>
          </div>
        </section>
        
        <div>
          <AgrCredit/>
        </div>

        <section>
          <NumbersCard/>
        </section>

        <section>
       
          <WhatWeDo/>
        </section>

        <section className={style.homepagenews}>
          {/* <h3>{t('world-news.1')}</h3> */}
          <h3>{t("agrolly-news.1")}</h3>
                    <HomepageWorldNews />
          
          {/* <News /> */}
        </section>

       

        <section id="feature">
          <Feature />
        </section>

        <section className={style.partnerlogo}>
          <Partnerlogo />
        </section>

        <Footer />
      </div>
    );
  }
}

let Homepage = withTranslation()(homePage);

export default Homepage;
