import React from "react";
import { Link } from "react-router-dom";
import style from "./countryCard.module.css";

function CountryCard(props) {
  return (
    <Link
      to={{ pathname: props.link }}
      target="_blank"
      className={style.hoverlink}
    >
      <figure className={style.countryCard}>
        <img
          className={style.countryImage}
          alt="Country Card"
          src={props.image}
        />
        <figcaption className={style.nameAndTitle}>
          <h1>{props.name}</h1>
        </figcaption>
      </figure>
    </Link>
  );
}

export default CountryCard;
