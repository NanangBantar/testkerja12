import React, { Component } from "react";
import Main from "../../components/Main";
import Card from "../../components/Card";
import Content from "./components/Content";
import ContactImage from "./assets/Untitled-3_Illustrasi_62T_LP_2 1.png";

class Contact extends Component {
  render() {
    require("./Contact.css");
    return (
      <Main>
        <div className="reversed-column">
          <div>
            <Card image={ContactImage} />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </Main>
    );
  }
}

export default Contact;
