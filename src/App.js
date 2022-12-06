import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useTranslation } from "react-i18next";

import Navbar from "./components/navbar";
import homePage from "./components/homePage/homepage";
import technology from "./components/aboutPage/technology/technology";
import ourteam from "./components/aboutPage/ourTeam/ourTeam";
import workWithUs from "./components/aboutPage/WorkWithUs/workWithUs";
import news from "./components/WorldNews/newsHomePage";
import createnews from "./components/WorldNews/inputNews";
import newsTemplet from "./components/WorldNews/newsTemplet";
import feedback from "./components/feedbackpage/feedbackpage";
import disclaimer from "./components/Disclaimer/disclaimer";

import farmerLogin from "./components/authentication/loginpage";
import Register from "./components/authentication/registerCard";
import OneTimePassword from "./components/authentication/oneTimePassword";
import ForgetPassword from "./components/authentication/forgetpassword";
import CommingUp from './components/commingup/Comeupsoon'
import Agrscore from "./components/Agrscore/AgrscorePage";

function App() {
  const { i18n } = useTranslation();

  function LanguageClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <Router>
        <Navbar />
        <ul
          style={{ zIndex: "999", position: "absolute", right: "3%" }}
          className="navbar-nav"
        >
          <li className="nav-item dropdown">
            <a
              style={{
                backgroundColor: "white",
                padding: "8px",
                margin: "10px",
                borderRadius: "10px",
              }}
              className="nav-link dropdown-toggle"
              href="/"
              id="WeatherDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </a>
            <div className="dropdown-menu" aria-labelledby="WeatherDropdown">
              <button
                className="dropdown-item"
                onClick={() => {
                  LanguageClick("en");
                }}
              >
                English
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  LanguageClick("po");
                }}
              >
                Portuguese
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  LanguageClick("mo");
                }}
              >
                Mongolian
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  LanguageClick("ch");
                }}
              >
                中文
              </button>
            </div>
          </li>
        </ul>
        <Route path="/" exact component={homePage} />
        <Route path="/ourteam" component={ourteam} />
        <Route path="/workwithus" component={workWithUs} />
        <Route path="/news" component={news} />
        <Route path="/agrcredit" component={Agrscore} />
        <Route path="/happened/:id" component={newsTemplet} />
        <Route path="/createnews" component={createnews} />
        <Route path="/feedback" component={feedback} />
        <Route path="/about/technology" component={technology} />
        <Route path="/disclaimer" component={disclaimer} />
        <Route path="/soon" component={CommingUp} />
        <Route path="/farmer/login" exact component={farmerLogin} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/farmer/onetimepassword"
          exact
          component={OneTimePassword}
        />
        <Route path="/farmer/forgetpassword" exact component={ForgetPassword} />
      </Router>
    </div>
  );
}

export default App;
