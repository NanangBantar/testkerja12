import "./Topbar.css";
import Logo from "../../assets/Vector.png";

const Topbar = ({ scrollPosition }) => {
  return (
    <div className={`topbar ${scrollPosition > 0 && "scrolled transparent"}`}>
      <div className="logo">
        <img className="logo-image" src={Logo} alt="logo" />
        <div>
          <p className="text-primary logo-text">Logo Here</p>
        </div>
      </div>
      <div className="topbar-text">
        <p className="topbar-paragraph text-primary">Resourceful Indonesia</p>
      </div>
    </div>
  );
};

export default Topbar;
