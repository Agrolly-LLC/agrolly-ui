import React from "react";
import style from "./partnerCard.module.css";

function NewsPreview(props) {
  return (
    <li figure className={style.cards}>
      <a href={props.link}>
        <figure className={style.card}>
          <img
            className={style.partnerImg}
            src={props.image}
            alt="Lines on a tropical leaf."
          />
          <figcaption className={style.caption}>
            <h3 class={style.captionTitle}>{props.name}</h3>
          </figcaption>
        </figure>
      </a>
    </li>
  );
}

export default NewsPreview;
