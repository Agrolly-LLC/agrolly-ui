import React, { Component } from "react";
import style from "./ourTeam.module.css";

import Ajinkya from "../../../Image/us/Ajinkya Photo.jpeg";
import Manoela from "../../../Image/us/Manoela Photo.jpg";
import Chimka from "../../../Image/us/Chimegsaikhan Munkhbayar.jpg";
import Helen from "../../../Image/us/Helen.png";

import Footer from "../../footer/footer";

import PersonCard from "./PersonCard";

export default class OurTeam extends Component {
  render() {
    return (
      <div>
        <section className={style.ourStory}>
          <div className={style.imageContainer}>
            <img
              className={style.ourStoryImg}
              src="https://3kda485d4m0mmprok50zsd5m-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/hero-video-bg-oct19.png"
              alt=""
            />
          </div>

          <div className={style.ourStoryText}>
            <h1>Our story</h1>
            <p>
              “Four individuals come from four different countries with
              different backgrounds. They met in New York City studying in the
              same university but with different specialists but have the same
              aim to make the world a better place, while doing their master’s
              and initiated the idea of developing a mobile app, Agrolly.
              Agrolly helps rural smallholder farmers fight against climate
              change, improve their farming know farmers, and increase the
              family income level.
            </p>
            <p>
              2020 four of them join up and answer the call for IBM Call for
              Code, with the faith of helping our own country fighting for
              climate change they came up with the solution to help farmers to
              gain planting knowledge and making risk management for the
              planting crop. Now Agrolly is moving forward to more countries and
              helping and improving local farmer day by day.”
            </p>
          </div>
        </section>

        <section id={style.whoWeAre}>
          <div className={style.titles}>
            <h1>The Agrolly Team</h1>
          </div>

          <div className={style.memberContainer}>
            <PersonCard
              personImg={Manoela}
              personName={"Manoela Morais"}
              personTitle={"CEO"}
              personLinkedIn={"https://www.linkedin.com/in/manoelamorais/"}
              personContent={
                "Manoela enjoys a challenge environment and is inspired to work with an international multiskilled team. Manoela is an engineer, holds an MBA and has a M.S in Finance Risk."
              }
            />
            <PersonCard
              personImg={Ajinkya}
              personName={"Ajinkya Datalkar"}
              personTitle={"CTO"}
              personLinkedIn={"https://www.linkedin.com/in/ajinkya-datalkar/"}
              personContent={
                "MS in Computer Science and Bachelor of Engineering in Electronics & Telecommunications, For any queries related to AGROLLY-INDIA drop an email at ajinkyadatalkar1@gmail.com"
              }
            />
            <PersonCard
              personImg={Chimka}
              personName={"Chimka Munkhbayar"}
              personTitle={"COO"}
              personLinkedIn={
                "https://www.linkedin.com/in/chimka-munkhbayar-0ab421b5/"
              }
              personContent={
                "BA in Informatics and MBA in Entrepreneurship. Fulbright scholar 2018-2020."
              }
            />
            <PersonCard
              personImg={Helen}
              personName={"Helen Tsai"}
              personTitle={"CIO"}
              personLinkedIn={"https://www.linkedin.com/in/helen-tsai-teyi/"}
              personContent={
                "Helen aim of using technology to bring up awareness. with both business and computer science backgrounds, Helen brings her innovation and marketing to Agrolly."
              }
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
