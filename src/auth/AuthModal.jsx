import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useAuthContext } from "../providers/AuthProvider";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { fakeAuth } from "../utils/fakeData";

const AuthModal = ({ action: _action = "login", onHide, onlyBody }) => {
  const { logIn } = useAuthContext();

  const [action, setAction] = useState(_action);
  const [authError, setAuthError] = useState();

  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);

  const switchForm = () => {
    const newAction = action === "login" ? "register" : "login";
    setAction(newAction);
  };

  const handleSubmit = (data) => {
    if (!onlyBody) {
      window.location.replace("/");
    }
    logIn(fakeAuth);
    onHide();
  };

  const props = { handleSubmit, authError, switchForm };

  let title = action === "login" ? "Prihlasenie" : "Registracia";

  const ModalContainer = ({ children }) => {
    if (onlyBody) {
      return <>{children}</>;
    }
    return (
      <Modal show={showModal} onHide={onHide || closeModal} centered>
        {children}
      </Modal>
    );
  };

  return (
    <ModalContainer>
      <Modal.Header closeButton>
        <Modal.Title className="mx-0">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {action === "login" ? (
          <LoginForm {...props} />
        ) : (
          <RegisterForm {...props} />
        )}
      </Modal.Body>
    </ModalContainer>
  );
};

export default AuthModal;
