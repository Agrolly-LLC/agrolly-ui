import React from "react";
import style from "./partnerComponent.module.css";
import PartnerCard2 from "./partnerCard2";

function Partners(props) {
  const partner1 = require("../../../Image/partnerImage/partner1.png");
  const partner2 = require("../../../Image/partnerImage/partner2.png");
  const partner3 = require("../../../Image/partnerImage/partner3.png");
  return (
    <div>
      {/* <div className={style.titleContent}>
                <h1>
                    Agrolly Partners
                </h1>
            </div> */}
      <div className={style.Partners}>
        {/* <PartnerCard Size={"300px"} Image={CallForCode} Name={"IBM Call for Code"} Link={"https://callforcode.org/"} Content={"After Agrolly winning IBM Call for code 2020 globel Finalist, Call for code keep mentoring Agrolly globel and imporving agrolly open source stracture, technologies and guiding us with partners. IBM also sponsor Agrolly globel with IBM technology and weather Company data soure. Agrolly keep listening to the call and wish to help all the farmer in need"} />
                <PartnerCard Size={"200px"} Image={CampoReal} Name={"Campo Real"} Link={"https://camporeal.edu.br/"} Content={"Campo Real is a great Univeristy located in Brasil, Campo Real bring up mutiple agriculture specialist, increse agrolly crop data and help farmer in the world as a aim"} />
                <PartnerCard Image={GUARAPUAVA}/> */}

        <PartnerCard2
          link={"https://callforcode.org/"}
          image={partner2}
          name={"Call for Code"}
        />
        <PartnerCard2
          link={"https://camporeal.edu.br/"}
          image={partner1}
          name={"CAMPO REAL"}
        />
        <PartnerCard2
          link={"https://camporeal.edu.br/"}
          image={partner3}
          name={"aambo"}
        />
        <PartnerCard2
          link={"https://callforcode.org/"}
          image={partner2}
          name={"Call for Code"}
        />
      </div>
    </div>
  );
}

export default Partners;
