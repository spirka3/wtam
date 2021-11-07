import React, { useState } from "react";
import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "./providers/AuthProvider";
import AuthModal from "./components/modals/AuthModal";

const Navigation = () => {
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
      >
        {name}
      </NavLink>
    );
  };

  const MyDropdownItem = ({ to, name }) => {
    return (
      <NavDropdown.Item
        key={to}
        style={getStyle(to)}
        as={Link}
        to={to}
        active={isActiveLink(to)}
        className={`text-center ${isActiveLink(to) && "active-drop-link"}`}
      >
        {name}
      </NavDropdown.Item>
    );
  };

  const ProfileDropDown = () => {
    return (
      <NavDropdown title="Moj profil" id="profile-dropdown">
        <MyDropdownItem to="/progres" name="Moj progres" />
        <MyDropdownItem to="/druzina" name="Moja druzina" />
        <MyDropdownItem to="/profil" name="Upravit profil" />
      </NavDropdown>
    );
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{ padding: "0.25rem 1rem 0.25rem 8rem" }}
    >
      <Navbar.Brand as={Link} to="/">
        <h2 className="d-inline">Scout tracking app</h2>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" variant="pills">
          <MyNavLink to="/novinky" name="Novinky" />
          <MyNavLink to="/odborky" name="Odborky" />
          <MyNavLink to="/vyzvy" name="Vyzvy" />
          <MyNavLink to="/aktivity" name="Ostatne aktivity" />
          {auth.token ? (
            <>
              <ProfileDropDown />
              <NavLink onClick={logOut} className="text-center">
                Odhlasit sa
              </NavLink>
            </>
          ) : (
            <NavLink onClick={() => setShowModal(true)} className="text-center">
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
