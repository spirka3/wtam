import React, { useState } from "react";
import { Col, NavLink } from "react-bootstrap";
import { Link as SectionLink } from "react-scroll";
import { Link } from "react-router-dom";

const RightColumn = () => {
  const [activeSection, setActiveSection] = useState("1");

  const divStyle = {
    display: "block",
    verticalAlign: "middle",
    textAlign: "center",
    width: "100%",
    height: "100px",
    marginBottom: "2rem",
    paddingTop: "2rem",
    backgroundSize: "cover",
    cursor: "pointer",
  };

  const spanStyle = {
    padding: ".5rem .75rem",
    fontSize: "1.15rem",
    fontWeight: "400",
    color: "black",
    backgroundColor: "#F8F9FA",
  };

  const SectionButton = ({ text, url, to }) => {
    const a = activeSection === to ? 0.35 : 0.1;

    return (
      <SectionLink
        activeClass="active-section"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => setActiveSection(to)}
      >
        <div
          style={{
            ...divStyle,
            boxShadow: `3px 3px 10px 4px rgba(0,0,0,${a})`,
            backgroundImage: `url(${url})`,
          }}
        >
          <span style={spanStyle}>{text}</span>
        </div>
      </SectionLink>
    );
  };

  const NavigationButton = ({ text, url, marginTop, to }) => {
    return (
      <NavLink
        style={{
          ...divStyle,
          marginTop: marginTop,
          boxShadow: `3px 3px 10px 4px rgba(0,0,0,0.1)`,
          backgroundImage: `url(${url})`,
        }}
        as={Link}
        to={to}
      >
        <span style={spanStyle}>{text}</span>
      </NavLink>
    );
  };

  return (
    <Col className="d-xs-none" sm={0} md={3}>
      <div style={{ position: "fixed", width: "20%" }}>
        <h4>Kategorie:</h4>
        <SectionButton
          text="Vĺčatá a včielky"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-vlciacke-bttn.png"
          to="1"
        />
        <SectionButton
          text="Skauti a rangeri"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          to="2"
        />
        <SectionButton
          text="Roveri"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-roverske-bttn.png"
          to="3"
        />
        <NavigationButton
          text="Vyzvy"
          url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          marginTop="8rem"
          to="/vyzvy"
        />
        <NavigationButton
          text="Ostatne aktivity"
          url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          to="/aktivity"
        />
      </div>
    </Col>
  );
};

export default RightColumn;
