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
  // document.title = "Domov" + _appName;

  //const containerStyle = { margin: "-4rem -8rem" };

  const backgroundStyle = {
    width: "100%",
    height: "calc(100vh - 57px)", // navbar height = 57px
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
    color: "#3E4042",
	fontWeight: 500,
  };

  return (
	<div class="home-wrapper">
		<div class="home-box">
			<div class="home-card">
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
				<Button className="home-title" style={buttonStyle} as={Link} to="/odborky">
				<div class="home-btn-title" style={{ ...pStyle, margin: "0", color: "white" }}>
					<span>Vyber si odborku</span>
					<IoArrowForwardCircleSharp
					size={30}
					className="home-arrow"
					/>
				</div>
				</Button>
			</div>
		</div>
	</div>
  );
};

export default HomePage;
