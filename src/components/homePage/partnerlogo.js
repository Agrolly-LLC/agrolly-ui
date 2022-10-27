import React, { Component } from "react";
import style from "./partnerlogo.module.css";

import codeForCode from "../../Image/partner/2020_callforcode_logo.png";
import BgovermentLogo from "../../Image/partner/Bazil goverment logo.png";
import CampoLogo from "../../Image/partner/campo_real_logo.png";
import Aambo from "../../Image/partner/aambo.png";

export default class Partnerlogo extends Component {
  render() {
    return (
      <div className={style.site}>
        <h3 className={style.partnertext}>Partners</h3>
        <div className={style.agrollypartner}>
          <img
            className={style.partnerImage}
            src={codeForCode}
            alt="2020 call for code"
          />
          <img
            className={style.partnerImage}
            src={BgovermentLogo}
            alt="Bazil goverment logo"
          />
          <img
            className={style.partnerImage}
            src={CampoLogo}
            alt="campo real"
          />
          <img className={style.partnerImage} src={Aambo} alt="Aambo" />
        </div>
      </div>
    );
  }
}
