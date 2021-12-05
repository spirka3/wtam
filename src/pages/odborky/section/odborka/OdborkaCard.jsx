import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import AuthModal from "../../../../auth/AuthModal";
import { useAuthContext } from "../../../../providers/AuthProvider";
import OdborkaModal from "./OdborkaModal";
import axios from "axios";

import "./index.css";

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

  const addItem = async (activityId) => {
    console.log(activityId);
    if (auth.token) {
      setIsAdded(true);
      // TODO uloz pridanie odborky do databazy podla id
      await axios
        .post("api/activities", {
          user_id: 10,
          activity_id: activityId,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    } else {
      setShowLoginModal(true);
    }
  };

  const show = showOdborkaModal || showLoginModal;

  return (
    <div className="my-card col-6 col-sm-4 col-lg-3">
      <Card onClick={toggleOdborkaModal}>
        <Card.Img
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
          {showLoginModal && <AuthModal onHide={toggleLoginModal} onlyBody />}
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
