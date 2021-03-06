import React, { useState } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "./providers/AuthProvider";
import AuthModal from "./auth/AuthModal";
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
      backgroundColor: isActiveLink(to) ? "#558776" : "#A3A847",
      fontWeight: 500,
      color: isActiveLink(to) ? "#fff" : "#fff",
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

  return (
    <div className="navbar-wrapper">
      <Navbar
        expand="lg"
        // bg="light"
        // variant="light"
        className="my-navbar"
        sticky="top"
        expanded={expanded}
      >
        <Navbar.Brand as={Link} to="/">
          <GiStairsGoal
            style={{
              marginRight: "0.5rem",
              color: "#fff",
            }}
            size={35}
          />
          <h1 className="d-inline appname" style={{ color: "#fff" }}>
            {appName}
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded((prev) => !prev)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mobile-menu" variant="pills">
            {/*<MyNavLink to="/novinky" name="Novinky" />*/}
            <MyNavLink to="/odborky" name="Odborky" />
            <MyNavLink to="/vyzvy" name="V??zvy" />
            <MyNavLink to="/ocenenia" name="Ocenenia" />
            {auth.token ? (
              <>
                <MyNavLink to="/progres" name="Moje aktivity" />
                <NavLink
                  style={getStyle()}
                  onClick={() => {
                    logOut();
                    setExpanded(false);
                    window.location.replace("/");
                  }}
                >
                  Odhl??si?? sa
                </NavLink>
              </>
            ) : (
              <NavLink
                style={getStyle()}
                onClick={() => {
                  setShowModal(true);
                  setExpanded(false);
                }}
              >
                Prihl??si?? sa
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        {showModal && <AuthModal action="login" onHide={closeModal} />}
      </Navbar>
    </div>
  );
};

export default Navigation;

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
