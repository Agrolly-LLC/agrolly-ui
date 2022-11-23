import React from "react";
import style from "./whatwedo.module.css";

const SolutionCard = (props) => {
  return (
    <div className={style.cardContiner}>
      <div className={style.whatwedoImage}>
        <img src={props.image} />
      </div>
      <div className={style.titleContent}>
        <h4>{props.title}</h4>
        <div className={style.solutionContent}>
          <small>{props.content}</small>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
