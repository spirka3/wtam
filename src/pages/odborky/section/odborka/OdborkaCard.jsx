import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import AuthModal from "../../../../auth/AuthModal";
import { useAuthContext } from "../../../../providers/AuthProvider";
import OdborkaModal from "./OdborkaModal";
import axios from "axios";

import "./index.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  BsFillLayersFill,
  FcViewDetails,
  GrLayer,
  MdOutlineAddCircle,
} from "react-icons/all";
import { Redirect } from "react-router";

const OdborkaCard = ({ odborka, hasActive, isDone }) => {
  const { auth } = useAuthContext();

  console.log(odborka, isDone);

  const [tab, setTab] = useState("");

  const { name, id, img_url: image } = odborka.items[0];

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

  const btnVariant = isAdded ? "success" : "primary";
  let btnColor = "";
  if (isDone) {
    btnColor = "#bec454";
  } else if (isAdded) {
    btnColor = "#e38201";
  } else {
    btnColor = "#558776";
  }

  let btnText = "";
  if (isDone) {
    btnText = "Získané";
  } else if (isAdded) {
    btnText = "Rozpracované";
  } else {
    btnText = "Pridať odborku";
  }

  if (tab === "progress") {
    return (
      <Redirect
        push
        to={{
          pathname: "/progres",
          state: { tab: "progress" },
        }}
      />
    );
  }
  if (tab === "done") {
    return (
      <Redirect
        push
        to={{
          pathname: "/progres",
          state: { tab: "achieved" },
        }}
      />
    );
  }

  return (
    <div key={id} className="my-card col-6 col-sm-4 col-lg-3">
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
              className="card-btn mr-1"
              variant={btnVariant}
              onClick={(e) => {
                e.stopPropagation();
                if (isDone) {
                  setTab("done");
                } else if (isAdded) {
                  setTab("progress");
                } else {
                  addItem(odborka.items[0].id);
                }
              }}
              style={{
                backgroundColor: btnColor,
                borderColor: btnColor,
                color: "white",
                width: "8rem",
              }}
              title="Po pridaní odborky môžeš začať splňať úlohy"
            >
              {btnText}
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
              isDone={isDone}
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
