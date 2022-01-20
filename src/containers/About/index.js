import React, { Component } from "react";
import Main from "../../components/Main";
import Card from "../../components/Card";
import AboutUsImage from "./assets/Untitled-3-01 1.png";
import Content from "./components/Content";

class About extends Component {
  render() {
    require("./About.css");
    return (
      <Main>
        <div className="reversed-column">
          <div>
            <Card image={AboutUsImage} />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </Main>
    );
  }
}

export default About;
