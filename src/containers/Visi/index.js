import React, { Component } from "react";
import Main from "../../components/Main";
import Card from "../../components/Card";
import VisiImage from "./assets/Untitled-3_Illustrasi_62T_LP_3 1.png";
import Content from "./components/Content";

class Visi extends Component {
  render() {
    require("./Visi.css");
    return (
      <Main>
        <div className="reversed-column">
          <div>
            <Card image={VisiImage} />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </Main>
    );
  }
}

export default Visi;
