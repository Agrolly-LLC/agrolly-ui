import React from "react";
import style from "./PersonCard.module.css";

function CountryCard(props) {
  return (
    <div className={style.personContainer}>
      <div className={style.personImg}>
        <img
          src={props.personImg}
          className={style.projectImage}
          alt={props.personName}
        />
      </div>
      <div className={style.personaContain}>
        <p className={style.nameText}>{props.personName}</p>
        <p className={style.titleText}>{props.personTitle}</p>
        <p className={style.infoText}>{props.personContent}</p>
        <a href={props.personLinkedIn}>
          <i className="fab fa-linkedin fa-2x linkicon"></i>
        </a>
      </div>
    </div>
  );
}

export default CountryCard;
