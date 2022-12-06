import React from 'react'
import style from './timeline.module.css'

const TimeLine = () => {
  return (
    <div className={style.section_2_timeline}>
      <div className={style.timeline}>
        <ul>
          <li>
            <div className={style.content}>
              <h3>Agrolly win Call for Code</h3>
              <small>Team receives $200K and support from IBM, Linux and the Call for Code ecosystem to accelerate the project. </small>
            </div>
            <div className={style.time}>
              <h4>OCT 2020</h4>
            </div>
          </li>

          <li>
            <div className={style.content}>
              <h3>Agrolly conducts pilot tests and forms a global partnership with IBM</h3>
              <small>Agrolly conducts pilots' tests in Mongolia , Brazil and India.</small>
            </div>
            <div className={style.time}>
              <h4>Mar 2021</h4>
            </div>
          </li>

          <li>
            <div className={style.content}>
              <h3>Mongolia’ and India’s APP Launched</h3>
            </div>
            <div className={style.time}>
              <h4>May/Jul 2021</h4>
            </div>
          </li>

          <li>
            <div className={style.content}>
              <h3>Brazil’s APP and Taiwan's web app launched</h3>
            </div>
            <div className={style.time}>
              <h4>Feb/Apr 2022</h4>
            </div>
          </li>

          <li>
            <div className={style.content}>
              <h3>Launch of the Open-Source Project "OpenTempus"</h3>
              <small>Agrolly is together with Linux, IBM, Call for Code and more partners making the annual weather forecast open source. Project supervised by Agrolly and IBM. </small>
            </div>
            <div className={style.time}>
              <h4>4Q 2022</h4>
            </div>
          </li>

          <li>
            <div className={style.content}>
              <h3>Farmer’s Credit Score Platform launch</h3>
            </div>
            <div className={style.time}>
              <h4>2Q 2023</h4>
            </div>
          </li>
              <div style={{clear:"both"}}></div>
        </ul>
      </div>

      <div className={style.timeline_text}>
        <h2>Our Journey</h2>
        <p>We launched the Agrolly for the aim of helping local farmer for all kind of thing, from help farmers to manage their crop, learn from other farmers, crop risk management, and many more. when we first start the idea and answer the call from call for code, we first tested in Mongolia, after 1 more year we launch at 4 different country and day by day more and more farmer join our community. with the aim we keep growing and expanding everyday</p>
      </div>
    </div>
  )
}

export default TimeLine