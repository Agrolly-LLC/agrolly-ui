import React from "react";
import style from "./countrybutton.module.css";
import CountryCard from "./countryCard";

function countryButton(props) {
  const Mongolia = require("../../Image/Country/Mongoliaedit.png");
  const Brazil = require("../../Image/Country/Braziledit.png");
  const India = require("../../Image/Country/Indiaedit.png");
  const Taiwan = require("../../Image/Country/Taiwanedit.png");
  return (
    <div className={style.countryContener}>
      <div className={style.countryLine}>
        <CountryCard
          image={Mongolia}
          name={"Mongolia"}
          link={"https://agrolly.mn/"}
        />
        <CountryCard
          image={Brazil}
          name={"Brazil"}
          link={"http://agrolly.br"}
        />
        <CountryCard
          image={India}
          name={"India"}
          link={"http://agrollytechnologies.in"}
        />
        <CountryCard
          image={Taiwan}
          name={"Taiwan"}
          link={"https://agrollytaiwan.com"}
        />
      </div>
    </div>
  );
}

export default countryButton;
