import React from "react";
import { Button } from "react-bootstrap";
import {
  IoIosRocket,
  BsFillPeopleFill,
  BsFillBookmarkStarFill,
  IoArrowForwardCircleSharp,
} from "react-icons/all";
import { Link } from "react-router-dom";

const HomePage = () => {
  const containerStyle = { margin: "-4rem -8rem" };

  const backgroundStyle = {
    width: "100%",
    height: "94vh",
    backgroundImage: "url('images/home-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  };

  const cardStyle = {
    position: "absolute",
    right: "0",
    top: "10%",
    width: "300px",
  };

  const iconStyle = { margin: "0 1rem 0 1.5rem" };

  const buttonStyle = {
    width: "100%",
    marginTop: "1.25rem",
    backgroundColor: "#EB6267",
    borderColor: "#EB6267",
  };

  const pStyle = {
    fontWeight: "bold",
    fontSize: "1.75rem",
    color: "#3E4042",
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}>
        <div style={cardStyle}>
          <div
            style={{
              backgroundColor: "rgb(245,246,247,0.65)",
              padding: "1rem 0 0.5rem 0",
            }}
          >
            <p style={pStyle}>
              <BsFillBookmarkStarFill style={iconStyle} />
              Nové zážitky
            </p>
            <p style={pStyle}>
              <BsFillPeopleFill style={iconStyle} />
              Priateľstvá
            </p>
            <p style={pStyle}>
              <IoIosRocket style={iconStyle} />
              Osobný rast
            </p>
          </div>
          <Button style={buttonStyle} as={Link} to="/odborky">
            <p style={{ ...pStyle, margin: "0", color: "white" }}>
              Vyber si aktivitu
              <IoArrowForwardCircleSharp
                size={30}
                style={{ margin: "-0.5rem 0.5rem 0 0.5rem" }}
              />
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
