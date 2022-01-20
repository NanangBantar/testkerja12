import Recaptcha from "./Recaptcha";

const Contactform = () => {
  return (
    <div className="contact-form-container">
      <div className="form-input-container">
        <div className="form-input">
          <input className="form-input-basic" placeholder="Full name" />
        </div>
        <div className="form-input">
          <input className="form-input-basic" placeholder="Email address" />
        </div>
        <div className="form-input">
          <textarea
            className="form-input-basic form-input-textarea"
            placeholder="Your message here"
          />
        </div>
        <Recaptcha />
        <button className="contact-form-button">Send Message</button>
      </div>
    </div>
  );
};

export default Contactform;
