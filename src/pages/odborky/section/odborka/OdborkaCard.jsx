import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import AuthModal from "../../../../auth/AuthModal";
import { useAuthContext } from "../../../../providers/AuthProvider";
import OdborkaModal from "./OdborkaModal";
import axios from "axios";

import "./index.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const OdborkaCard = ({ odborka, image, name, hasActive }) => {
  const { auth } = useAuthContext();

  const [showOdborkaModal, setShowOdborkaModal] = useState(false);
  const toggleOdborkaModal = () => setShowOdborkaModal((prev) => !prev);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleLoginModal = () => setShowLoginModal((prev) => !prev);

  const [isAdded, setIsAdded] = useState(hasActive);

  const addItem = (activityId) => {
    console.log(activityId);
    if (auth.token) {
      setIsAdded(true);
      axios
        .post("api/add-activity", {
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

  const btnColor = isAdded ? "#B6DE92" : "#85CBF4";
  const btnVariant = isAdded ? "success" : "primary";
  const btnText = isAdded ? "Ukáž progres" : "Pridať odborku";

  const showItem = () => {
    window.location.replace("/progres");
  };

  return (
    <div
      className="my-card col-6 col-sm-4 col-lg-3"
      style={{ cursor: "pointer", position: "relative" }}
    >
      <Card onClick={toggleOdborkaModal}>
        <Card.Img variant="top" src={image} />
        <Card.Body
          className="card-body"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            padding: "0.25rem",
          }}
        >
          <Card.Title className="text-center card-title mb-2">
            {name}
          </Card.Title>
          <ButtonGroup className="card-btns">
            <Button
              size="sm"
              className="card-btn"
              variant={btnVariant}
              onClick={(e) => {
                e.stopPropagation();
                if (isAdded) {
                  showItem();
                } else {
                  addItem(odborka.id);
                }
              }}
              // style={{
              //   backgroundColor: btnColor,
              //   borderColor: btnColor,
              //   color: "black",
              //}}
            >
              {btnText}
            </Button>
            <Button
              size="sm"
              className="card-btn"
              variant={`outline-${btnVariant}`}
            >
              Detail
            </Button>
          </ButtonGroup>
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
              odborka={odborka}
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
