import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useAuthContext } from "../providers/AuthProvider";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { fakeAuth } from "../utils/fakeData";
import axios from "axios";

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
      axios
        .post("api/active", {
          user_id: 10,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.length) {
            window.location.replace("/progres");
          } else {
            window.location.replace("/");
          }
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
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
