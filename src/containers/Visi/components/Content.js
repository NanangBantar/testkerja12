import Map from "./Map";

const Content = () => {
  return (
    <div className="main-content">
      <div>
        <p className="text-primary main-title">Vision Mission</p>
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
            Our Vision
          </p>
          <p style={{ lineHeight: "24px", paddingLeft: "3px" }}>
            Becoming number one preferred digital platform of international
            trades for Indonesia and the world.
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
            Our Mission
          </p>
          <p style={{ lineHeight: "24px", paddingLeft: "3px" }}>
            Empowering Indonesia’s MSME nationwide to go international,
            collaboration with all supporting function such as financial, supply
            chain and logistic, and expanding international network by building
            partnership with overseas well known digital platform.
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
            Values
          </p>
          <div style={{ lineHeight: "24px", paddingLeft: "3px" }}>
            <ul style={{ marginLeft: "25px", listStyleType: "decimal" }}>
              <li>Simple</li>
              <li>Trustworthy</li>
              <li>Problem Solver</li>
            </ul>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Content;
