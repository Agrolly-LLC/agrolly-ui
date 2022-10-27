import React from "react";
import style from "./disclaimer.module.css";
import Footer from "../footer/footer";

function Disclaimer(props) {
  return (
    <div>
      <section className={style.DisclaimerTitle}>
        <h1>Disclaimer</h1>
      </section>
      <section className={style.content}>
        <p>
          The information contained in this website is for general information
          purposesonly. While we endeavour to keep the information up to date
          and correct, we make norepresentations or warranties of any kind,
          express or implied, about the completeness,accuracy, reliability,
          suitability or availability with respect to the website or the
          information,services, or related graphics contained on the website for
          any purpose. Any reliance you placeon such information is therefore
          strictly at your own risk. You need to make your ownenquiries to
          determine if the information or services are appropriate for your
          intended use.
        </p>

        <p>
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data orprofits arising out of,
          or in connection with, the use of this website.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Disclaimer;
