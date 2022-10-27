import React, { Component } from "react";

import LoginCard from "./loginpageCard";
import Footer from "../footer/footer";

import { withTranslation } from "react-i18next";

class UserLogins extends Component {
  render() {
    return (
      <div>
        <div>
          <LoginCard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const UserLogin = withTranslation()(UserLogins);

export default UserLogin;
