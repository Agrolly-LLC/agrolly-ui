import React from "react";
import style from "./CommingUpSoon.module.css";

const CommingUpSoon = () => {
  const comingupImage = require("../../Image/background/comingupsoon.png");

  return (
    <div>
      <div className={style.impageContainer}>
        <img className={style.comingupImage} src={comingupImage} alt="" />
      </div>
    </div>
  );
};

export default CommingUpSoon;
