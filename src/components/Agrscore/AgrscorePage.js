import React from "react";
import { useEffect } from "react";
import Footer from "../footer/footer";
import style from "./AgrscorePage.module.css";

const AgrscorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={style.AgrCreditContainer}>
      <section className={style.explanContent}>
        <h2>
          The Agri Risk Score is a measurement that assesses farmers in the
          context of operational, business and financially relevant
          environmental, social and governance (ESG) related risks that could
          impact theirs and global performance.
        </h2>
        <div>
          <p>
            Small-scale farmers across the globe are in need of getting loans to
            improve their land outcome, make the leap into the world of farming,
            or take their existing farms to the next level. However, the credit
            and SGE evaluation of those farmers has been a challenge for many
            banks and financial institutions that do not hold this information
            and are struggling to penetrate the farming industry and distribute
            their available green loan funds. Agri Risk Score evaluates
            creditworthiness in the agriculture industry. Agrolly provides a
            detailed score and reports from several fields that goes from
            climate and operational risks to sustainability indexes. Our risk
            evaluation uses technology from Agrolly's app and website to adress
            one of the biggest challenges in the agricultural area, the small
            farmer's access to a quick and fair credit risk assessment.
            Investors can now provide loans in a more transparent and
            disciplined framework that focuses not only in the farmer ability of
            payment but also on the ESG-related business issues that could
            impact global goals .
          </p>
          <p>
            Agri Risk Score evaluates creditworthiness in the agriculture
            industry. Agrolly provides a detailed score and reports from several
            fields that goes from climate and operational risks to
            sustainability indexes. Our risk evaluation uses technology from
            Agrolly's app and website to adress one of the biggest challenges in
            the agricultural area, the small farmer's access to a quick and fair
            credit risk assessment.
          </p>
          <p>
            Investors can now provide loans in a more transparent and
            disciplined framework that focuses not only in the farmer ability of
            payment but also on the ESG-related business issues that could
            impact global goals .
          </p>
        </div>
      </section>
      <br />
      <section className={style.methodContent}>
        <h2>The Methodology</h2>
       
        <div>
          <p>
            The Agri Risk Score uses technology combined with well-known
            guidelines to provide a comprehensive risk score for the farmer. The
            assessment combines information taken from the farmer's application
            as an initial source with the approach two leading sustainability
            standards frameworks:
          </p>
          <p>
            — the Sustainability assessment of Food and agriculture systems
            Guidelines (SAFA) from the United Nations SAFA, which are small
            producers-specific sustainability disclosure guidelines focused the
            impact of food and agriculture operations on the environment and
            people. It has framework on governance, environment and social and
            economy.
          </p>
          <p>
            — The Sustainability Accounting Standards Board’s (SASB) Standards,
            which are industry-specific sustainability disclosure standards
            focused on agricultural products — to all financially material ESG
            risks across the SASB Standards, resulting in a comprehensive risk
            assessment.{" "}
          </p>
          <p>
            Additionally, The Agri Risk Score combines Agrolly’s technology to
            assess future climate risks crop related.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AgrscorePage;
