import recaptchaIcon from "../assets/Group.png";

const Recaptcha = () => {
  return (
    <div className="recaptcha-container">
      <div className="checkbox-recaptcha-container">
        <input type="checkbox" className="checkbox-recaptcha-input" />
        <label className="checkbox-recaptcha-label">I’m not a robot</label>
      </div>
      <div className="recaptcha-icon-container">
        <img
          className="recaptcha-icon-image"
          src={recaptchaIcon}
          alt="recaptcha-icon"
        />
        <label className="recaptcha-icon-label">Privacy - Terms</label>
      </div>
    </div>
  );
};

export default Recaptcha;
