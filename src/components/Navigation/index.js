import "./Navigation.css";
import Smilesvg from "./component/Smilesvg";
import Pentoolsvg from "./component/Pentoolsvg";
import Phonecallsvg from "./component/Phonecallsvg";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="navigation-section">
      <button
        className={`btn-navigation ${
          location.pathname === "/" && "active-navigation"
        }`}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="btn-navigation-icon">
            <Smilesvg location={location.pathname} />
          </div>
        </Link>
        <p
          className={`btn-text ${
            location.pathname === "/" && "active-navigation"
          }`}
        >
          About Us
        </p>
      </button>
      <button
        className={`btn-navigation ${
          location.pathname === "/visi" && "active-navigation"
        }`}
      >
        <Link style={{ textDecoration: "none" }} to="/visi">
          <div className="btn-navigation-icon">
            <Pentoolsvg location={location.pathname} />
          </div>
          <p
            className={`btn-text ${
              location.pathname === "/visi" && "active-navigation"
            }`}
          >
            Vision Mission
          </p>
        </Link>
      </button>
      <button
        className={`btn-navigation ${
          location.pathname === "/contact" && "active-navigation"
        }`}
      >
        <Link style={{ textDecoration: "none" }} to="/contact">
          <div className="btn-navigation-icon">
            <Phonecallsvg location={location.pathname} />
          </div>
          <p
            className={`btn-text ${
              location.pathname === "/contact" && "active-navigation"
            }`}
          >
            Contact
          </p>
        </Link>
      </button>
    </div>
  );
};

export default Navigation;
