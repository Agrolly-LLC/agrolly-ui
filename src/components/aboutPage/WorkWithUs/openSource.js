import React from "react";
import style from "./openSource.module.css";

function OpenSourelink(props) {
  const github = require("../../../Image/icon/github-logo.png");
  const slack = require("../../../Image/icon/slack.png");
  const youtube = require("../../../Image/icon/youtube logo.png");
  const Agrolly = require("../../../Image/Agrolly/newlogo.png");
  
  return (
    <div className={style.opensourceContainer}>
      <div className={style.site}>
          <a
            className={style.impagecontainer}
            href="https://github.com/Call-for-Code/Agrolly"
          >
            <img src={github} height="110px" alt="github logo" />
          </a>
          <a
            className={style.impagecontainer}
            href="https://callforcode.slack.com/archives/C01J10FEC95"
          >
            <img src={slack} height="110px" alt="slack logo" />
          </a>
          <a
            className={style.impagecontainer}
            href="https://www.youtube.com/channel/UC3O0AvJgDWX8VzO7SVOwy3Q?view_as=subscriber"
          >
            <img src={youtube} height="110px" alt="youtube logo" />
          </a>
        
      </div>
      <div className={style.agrollylogo}>
          <img src={Agrolly} height="300px" alt="github logo" />
        </div>
    </div>
  );
}

export default OpenSourelink;
