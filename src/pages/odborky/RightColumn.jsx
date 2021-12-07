import React, { useState } from "react";
import { NavLink, Form } from "react-bootstrap";
import { Link as SectionLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";

import "./index.css";
import { firstWord } from "../../utils/functions";

const RightColumn = ({ setFilterIsChecked }) => {
  const { auth } = useAuthContext();

  // TODO nastavit activeSection podla prihlaseneho usera
  const [activeSection, setActiveSection] = useState("1");

  const divStyle = {
    display: "block",
    verticalAlign: "middle",
    textAlign: "center",
    width: "100%",
    marginBottom: "1.5rem",
    padding: "2rem",
    backgroundSize: "cover",
    cursor: "pointer",
  };

  const spanStyle = {
    padding: ".5rem .75rem",
    fontSize: "1.15rem",
    fontWeight: "400",
    color: "black",
    backgroundColor: "#F8F9FA",
    // maxWidth: "10rem",
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
        duration={400}
        onSetActive={() => setActiveSection(to)}
      >
        <div
          style={{
            ...divStyle,
            boxShadow: `3px 3px 10px 4px rgba(0,0,0,${a})`,
            backgroundImage: `url(${url})`,
          }}
        >
          <span style={spanStyle}>{firstWord(text)}</span>
          {/*<p style={spanStyle}>{firstWord(text)}</p>*/}
        </div>
      </SectionLink>
    );
  };

  const NavigationButton = ({ text, url, marginTop, to, className }) => {
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
        className={className}
      >
        <span style={spanStyle}>{text}</span>
        {/*<p style={spanStyle}>{text}</p>*/}
      </NavLink>
    );
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 order-1 order-md-2">
      <div className="fixed-sidebar">
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setFilterIsChecked((prev) => !prev)}
            style={{
              fontWeight: "500",
              visibility: auth.token ? "visible" : "hidden",
            }}
            type="checkbox"
            label="Nezobrazovať získane aktivity"
          />
        </Form.Group>
        <h4>Kategórie:</h4>
        <SectionButton
          text="Vĺčatá a včielky"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-vlciacke-bttn.png"
          to="0"
        />
        <SectionButton
          text="Skauti a rangeri"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          to="1"
        />
        <SectionButton
          text="Roveri a Roverky"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-roverske-bttn.png"
          to="2"
        />
        <hr className="d-md-none" />
        <NavigationButton
          text="Výzvy"
          url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          to="/vyzvy"
          className="mt-md-5"
        />
        <NavigationButton
          text="Ocenenia"
          url="https://www.skauting.sk/wp-content/uploads/2019/01/skauting-program-najvyssie-ocenenie-medvedi-skaut-bttn.png"
          to="/ocenenia"
        />
      </div>
    </div>
  );
};

export default RightColumn;
