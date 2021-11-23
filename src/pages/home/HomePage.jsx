import React from "react";
import { Button } from "react-bootstrap";
import {
  IoIosRocket,
  BsFillPeopleFill,
  BsFillBookmarkStarFill,
  IoArrowForwardCircleSharp,
} from "react-icons/all";
import { Link } from "react-router-dom";

import "./index.css";

const HomePage = () => {
  const iconStyle = { margin: "0 1rem 0 1.5rem" };

  const buttonStyle = {
    width: "100%",
    marginTop: "1.25rem",
    backgroundColor: "#EB6267",
    borderColor: "#EB6267",
  };

  const pStyle = {
    color: "#3E4042",
    fontWeight: 500,
    fontSize: "1.5rem",
  };

  const backgroundStyle = {
    backgroundImage: "url('images/home-bg.png')",
  };

  return (
    <div>
      <div className="bg-2" style={backgroundStyle}></div>
      <div className="home-wrapper">
        <div className="home-box">
          <div className="home-card">
            <div
              style={{
                backgroundColor: "rgb(245,246,247,0.8)",
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
            <Button
              className="home-title"
              style={buttonStyle}
              as={Link}
              to="/odborky"
            >
              <div
                className="home-btn-title"
                style={{ ...pStyle, margin: "0", color: "white" }}
              >
                <span>Vyber si aktivitu</span>
                <IoArrowForwardCircleSharp size={30} className="home-arrow" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
