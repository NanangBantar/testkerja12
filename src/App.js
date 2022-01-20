import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/index.css";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import About from "./containers/About";
import Visi from "./containers/Visi";
import Contact from "./containers/Contact";

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Topbar scrollPosition={scrollPosition} />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/visi" component={Visi} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
