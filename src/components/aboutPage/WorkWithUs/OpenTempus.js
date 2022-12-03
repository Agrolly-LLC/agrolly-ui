import React from "react";
import style from "./OpenTempus.module.css";

const OpenTempus = () => {
  const OpentempusLogo = require("../../../Image/icon/OpenTempusWhole.png");
  const slack = require("../../../Image/icon/slack.png");
  return (
    <div className={style.openTempusContainer}>
      <div className={style.OpenTempusLogo}>
        <img src={OpentempusLogo} />
      </div>
      <div className={style.OpentempusContent}>
        <h1>Join the Community</h1>
        <p>
          In 2022, Agrolly Join the Linux fundation and provide and create
          OpenTempus to Open source community, to share the technology and
          contribute to the socialty
        </p>
        <br />
        <div className={style.communitybtn}>
          <a href="http://agrolly-web.mybluemix.net/" className={style.second_button}>
            <div >
              <img
                src="https://raw.githubusercontent.com/OpenTempus/OpenTempus/main/src/component/image/OpenTempusLogo.png"
                alt=""
              />
            </div>
            <div>
              <p>OpenTempus</p>
            </div>
          </a>
          <a
            href="https://join.slack.com/share/enQtNDQ0NzczMzA4ODk5OS00OWQyODZlOGY0YmE3MmUwNTA3ZGZjMGFjNmQzMGIxZGMyZmUwZjMxNDVlMDk3NjkxOTdhMDQyYmYzZmM3ZmVh"
            className={style.third_button}
          >
            <div>
              <img
                src={
                  "https://raw.githubusercontent.com/OpenTempus/OpenTempus/main/src/component/image/logoSlackLight.png"
                }
                alt=""
              />
            </div>
            <div>
              <p>Slack</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenTempus;
