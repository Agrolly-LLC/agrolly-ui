import React from "react";
import style from "./AgrCredit.module.css";
import { useHistory } from "react-router-dom";

const AgrCredit = () => {
  let history = useHistory();

  const goTotry = () => {
    history.push('/agrcredit')
  };

  return (
    <div className={style.agrCreditContainer}>
      <div className={style.agrCreditContent}>
        <h2>The Credit Score of Agriculture</h2>
        <p>
        AGRI risk Score evaluates creditworthiness in the agricultural industry. Agrolly provides a detailed score and reports from several fields that goes from climate and operational risks to sustainability indexes. Our risk evaluation uses technology from Agrolly's app and website to address one of the biggest challenge in the agricultural area: small farmer's access to quick and fair credit risk assessments.
        </p>
        <div>
          <button className={style.trymebtn} onClick={goTotry}>
            <b>To Learn more</b>
          </button>
          <button className={style.talktousbtn}>
            <b>Talk to Us</b>
          </button>
        </div>
      </div>
      <div className={style.creditImage}>
        <img src="./asset/agrCredit.png" />
      </div>
    </div>
  );
};

export default AgrCredit;
