import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import AuthModal from "../../../../auth/AuthModal";
import { useAuthContext } from "../../../../providers/AuthProvider";
import OdborkaModal from "./OdborkaModal";
import { axios } from "axios";

const OdborkaCard = ({ id, odborkyById, image, name }) => {
  const { auth } = useAuthContext();

  const [showOdborkaModal, setShowOdborkaModal] = useState(false);
  const toggleOdborkaModal = () => setShowOdborkaModal((prev) => !prev);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleLoginModal = () => setShowLoginModal((prev) => !prev);

  const hasInProgress = () => {
    // TODO zistit, ci ma odborku uz v progrese
    return false;
  };

  const [isAdded, setIsAdded] = useState(hasInProgress);

  const addItem = () => {
    if (auth.token) {
      setIsAdded(true);
      // TODO uloz pridanie odborky do databazy podla id
    } else {
      setShowLoginModal(true);
    }
  };

  const show = showOdborkaModal || showLoginModal;

  return (
    <div
      className="my-card"
      style={{
        display: "inline-block",
        margin: "1%",
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: "99",
      }}
    >
      <Card
        onClick={toggleOdborkaModal}
        style={{
          padding: "1rem",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        className="my-card"
      >
        <Card.Img
          style={{
            padding: "1rem",
            width: "10rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="top"
          src={image}
        />
        <Card.Body style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
          <Card.Title className="text-center card-title">{name}</Card.Title>
        </Card.Body>
      </Card>

      {show && (
        <Modal
          show={show}
          onHide={showLoginModal ? toggleLoginModal : toggleOdborkaModal}
          centered
        >
          {showLoginModal && (
            <AuthModal onHide={toggleLoginModal} onlyBody title="omg" />
          )}
          {!showLoginModal && (
            <OdborkaModal
              addItem={addItem}
              odborka={odborkyById}
              show={show}
              isAdded={isAdded}
              onHide={toggleOdborkaModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default OdborkaCard;
