import React, { useState } from "react";
import { Form, Dropdown, Button } from "react-bootstrap";
import { Link as SectionLink } from "react-scroll";
import { useAuthContext } from "../../providers/AuthProvider";

import "./index.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const RightColumn = ({
  filterIsChecked,
  setFilterIsChecked,
  setSearchText,
}) => {
  const { auth } = useAuthContext();

  // TODO nastavit activeSection podla prihlaseneho usera
  const [activeSection, setActiveSection] = useState("0");

  const divStyle = {
    display: "block",
    verticalAlign: "middle",
    textAlign: "center",
    width: "100%",
    marginBottom: "1.5rem", // .75rem pre mobil | 1.5rem desktop
    padding: "2rem", // .75rem pre mobil | 2rem desktop
    backgroundSize: "cover",
    zIndex: "-5",
    cursor: "pointer",
  };

  // TODO podkategorie pre skauti a roveri
  // Príroda Dobrovoľníctvo a občianstvo Zručnosti Šport Umenie a kultúra
  const subCategories = [
    "Dobrovoľníctvo a občianstvo",
    "Príroda",
    "Šport",
    "Umenie a kultúra",
    "Zručnosti",
  ];

  const SectionButton = ({ text, to }) => {
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
        <Button onClick={() => setActiveSection(to)} variant="light">
          {text}
        </Button>
      </SectionLink>
    );
  };

  const SelectButton = ({ text, to }) => {
    return (
      <Dropdown
        style={{ zIndex: "50" }}
        as={ButtonGroup}
        key="info"
        variant="light"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SectionButton text={text} to={to} />
        <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
        <Dropdown.Menu>
          {subCategories.map((value, i) => (
            <SectionLink
              activeClass="active-section"
              to={"_" + i}
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              onSetActive={() => setActiveSection("_" + i)}
            >
              <Dropdown.Item eventKey={i} onClick={setActiveSection("_" + i)}>
                {value}
              </Dropdown.Item>
            </SectionLink>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const SectionTab = ({ text, url, to }) => {
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
          className="section-category"
          style={{
            ...divStyle,
            boxShadow: `3px 3px 10px 4px rgba(0,0,0,${a})`,
            backgroundImage: `url(${url})`,
          }}
          onClick={() => setActiveSection(to)}
        >
          {text === "Skauti a rangeri" ? (
            <SelectButton text={text} to={to} />
          ) : (
            <SectionButton text={text} to={to} />
          )}
        </div>
      </SectionLink>
    );
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 order-1 order-md-2">
      <div className="fixed-sidebar">
        <h4 className="d-none d-sm-block">Kategórie:</h4>
        <SectionTab
          text="Vĺčatá a včielky"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-vlciacke-bttn.png"
          to="0"
        />
        <SectionTab
          text="Skauti a rangeri"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          to="1"
        />
        <SectionTab
          text="Roveri a Roverky"
          url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-roverske-bttn.png"
          to="2"
        />
        <br />
        <h4 className="d-none d-sm-block">Filter:</h4>
        <Form.Label htmlFor="searchText" visuallyHidden>
          Vyhladavanie
        </Form.Label>
        <Form.Control
          className="mb-2"
          id="searchText"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="🔎 Hľadaj podľa názvu odborky"
        />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/*<span style={{ fontSize: "0.9rem" }}>Ukáž</span>*/}
          <Form.Check
            onChange={() => setFilterIsChecked((prev) => !prev)}
            style={{
              fontSize: ".9rem",
              fontWeight: "500",
              visibility: auth.token ? "visible" : "hidden",
            }}
            checked={filterIsChecked}
            type="checkbox"
            label="nezačaté"
            inline
          />
          <Form.Check
            onChange={() => setFilterIsChecked((prev) => !prev)}
            style={{
              fontSize: ".9rem",
              fontWeight: "500",
              visibility: auth.token ? "visible" : "hidden",
            }}
            checked={filterIsChecked}
            type="checkbox"
            label="rozpracované"
            inline
          />
          <Form.Check
            onChange={() => setFilterIsChecked((prev) => !prev)}
            style={{
              fontSize: ".9rem",
              fontWeight: "500",
              visibility: auth.token ? "visible" : "hidden",
            }}
            checked={filterIsChecked}
            type="checkbox"
            label="získané"
            inline
          />
        </div>
        <hr className="d-md-none" />
      </div>
    </div>
  );
};

// const NavigationButton = ({ text, url, marginTop, to, className }) => {
//   return (
//     <NavLink
//       style={{
//         ...divStyle,
//         marginTop: marginTop,
//         boxShadow: `3px 3px 10px 4px rgba(0,0,0,0.1)`,
//         backgroundImage: `url(${url})`,
//       }}
//       as={Link}
//       to={to}
//       className={className}
//     >
//       <span style={spanStyle}>{text}</span>
//       {/*<p style={spanStyle}>{text}</p>*/}
//     </NavLink>
//   );
// };
// <NavigationButton
//   text="Výzvy"
//   url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
//   to="/vyzvy"
//   className="mt-md-5"
// />
// <NavigationButton
//   text="Ocenenia"
//   url="https://www.skauting.sk/wp-content/uploads/2019/01/skauting-program-najvyssie-ocenenie-medvedi-skaut-bttn.png"
//   to="/ocenenia"
// />

export default RightColumn;
