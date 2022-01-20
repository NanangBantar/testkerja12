import Contactform from "./Contactform";

const Content = () => {
  return (
    <div className="main-content">
      <div>
        <p className="text-primary main-title">Contact</p>
        <div>
          <p
            style={{
              marginTop: "27px",
              paddingLeft: "3px",
              fontWeight: "bold",
              marginBottom: "13px",
            }}
            className="main-paragraph text-primary"
          >
            Location
          </p>
          <p style={{ lineHeight: "24px", paddingLeft: "3px" }}>
            Sona Topas Tower,
            <br /> Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2,
            <br /> Karet, Jakarta Selatan, 12920.
          </p>
        </div>
        <div>
          <p
            style={{
              marginTop: "27px",
              paddingLeft: "3px",
              fontWeight: "bold",
              marginBottom: "13px",
            }}
            className="main-paragraph text-primary"
          >
            Email
          </p>
          <p style={{ lineHeight: "24px", paddingLeft: "3px" }}>
            info@62trade.com
          </p>
        </div>
      </div>
      <Contactform />
    </div>
  );
};

export default Content;
