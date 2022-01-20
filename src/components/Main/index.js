import "./Main.css";
import Navigation from "../Navigation";

const Main = ({ children }) => {
  return (
    <div className="main-container">
      <div>{children}</div>
      <div className="main-navigation">
        <Navigation />
      </div>
    </div>
  );
};

export default Main;
