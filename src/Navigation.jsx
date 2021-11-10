import React, { useState } from "react";
import { Navbar, Nav, NavLink, NavDropdown, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "./providers/AuthProvider";
import AuthModal from "./components/modals/AuthModal";
import { GiStairsGoal } from "react-icons/all";
import { appName } from "./utils/fakeData";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const { auth, logOut } = useAuthContext();
  const path = useLocation().pathname;

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const isActiveLink = (to) => path === to;

  const getStyle = (to) => {
    return {
      backgroundColor: isActiveLink(to) ? "#85ccff" : "#f8f9fa",
    };
  };

  const MyNavLink = ({ to, name, ...rest }) => {
    return (
      <NavLink
        style={getStyle(to)}
        as={Link}
        to={to}
        active={isActiveLink(to)}
        {...rest}
        onClick={() => setExpanded(false)}
      >
        {name}
      </NavLink>
    );
  };

  // const ProfileDropDown = () => {
  //   const MyDropdownItem = ({ to, name }) => {
  //     return (
  //       <NavDropdown.Item
  //         key={to}
  //         style={getStyle(to)}
  //         as={Link}
  //         to={to}
  //         active={isActiveLink(to)}
  //         className={`text-center ${isActiveLink(to) && "active-drop-link"}`}
  //       >
  //         {name}
  //       </NavDropdown.Item>
  //     );
  //   };
  //   return (
  //     <NavDropdown title="Moj profil" id="profile-dropdown">
  //       <MyDropdownItem to="/progres" name="Moj progres" />
  //       <MyDropdownItem to="/druzina" name="Moja druzina" />
  //       <MyDropdownItem to="/profil" name="Upravit profil" />
  //     </NavDropdown>
  //   );
  // };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{ padding: "0.25rem 1rem 0.25rem 8rem" }}
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/">
        <GiStairsGoal
          style={{
            marginTop: "-1rem",
            marginRight: "0.5rem",
            color: "#363636",
          }}
          size={35}
        />
        <h1 className="d-inline" style={{ color: "#363636", fontSize: "2rem" }}>
          {appName}
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded((prev) => !prev)} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" variant="pills">
          <MyNavLink to="/novinky" name="Novinky" />
          <MyNavLink to="/odborky" name="Odborky" />
          <MyNavLink to="/vyzvy" name="Vyzvy" />
          <MyNavLink to="/aktivity" name="Ostatne aktivity" />
          {auth.token ? (
            <>
              {/*<ProfileDropDown />*/}
              <MyNavLink to="/progres" name="Moje aktivity" />
              <NavLink
                onClick={() => {
                  logOut();
                  setExpanded(false);
                }}
              >
                Odhlasit sa
              </NavLink>
            </>
          ) : (
            <NavLink
              onClick={() => {
                setShowModal(true);
                setExpanded(false);
              }}
            >
              Prihlasit sa
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
      {showModal && <AuthModal action="login" onHide={closeModal} />}
    </Navbar>
  );
};

export default Navigation;
