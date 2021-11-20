import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useAuthContext } from "../../providers/AuthProvider";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import { fakeAuth } from "../../utils/fakeData";

const AuthModal = ({
  action: _action = "login",
  onHide,
  onlyBody,
  additionalInfo,
}) => {
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
    if (action === "register") {
      // register request
      // if successful then login
    } else {
      // login request
      logIn(fakeAuth);
    }
    onHide();
  };

  const props = { handleSubmit, authError, switchForm };

  let title = action === "login" ? "Prihlasenie" : "Registracia"; // action = "login" || "register"

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
