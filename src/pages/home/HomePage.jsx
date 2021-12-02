import React from "react";

import "./index.css";
import HomeCard from "./HomeCard";

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: "url('images/home-bg.png')",
  };

  return (
    <div>
      <div className="bg-2" style={backgroundStyle} />
      <div className="home-wrapper">
        <div className="home-box">
          <HomeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
