import React, { useState } from "react";
import { Row, Button, Modal, Card, Badge } from "react-bootstrap";

import "./index.css";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import { useAuthContext } from "../../providers/AuthProvider";
import AuthModal from "../../components/modals/AuthModal";

const OdborkyPage = () => {
  const { auth } = useAuthContext();

  const [isAdded, setIsAdded] = useState(false);

  const [showCardModal, setShowCardModal] = useState(undefined);
  const closeCardModal = () => {
    setIsAdded(false);
    setShowCardModal(undefined);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);

  const addItem = () => {
    if (auth.token) {
      console.log("mas to");
      setIsAdded(true);
    } else {
      console.log("naskor sa prihlas");
      setShowLoginModal(true);
    }
  };

  const CardModal = () => {
    const btnColor = isAdded ? "#B6DE92" : "#F2E272";
    const btnText = isAdded ? "Zobraz progres" : "Zacat odborku";

    return (
      <>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title className="mx-0">
            <img
              style={{
                display: "inline-block",
                width: "60px",
                height: "60px",
              }}
              src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-43-200x180.png"
              alt="obr"
            />
            <p
              style={{
                textAlign: "center",
                marginLeft: "1rem",
                display: "inline-block",
              }}
            >
              Animáčik
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Prečítali sme si rozprávkovú obrázkovú knihu alebo komiks a vieme
            povedať jej krátky obsah. Pozerali sme rozprávku v kine alebo v
            divadle. Vyrobili sme si kostým alebo model našej obľúbenej
            kreslenej postavičky. Stretli sme sa s animátorom, ilustrátorom
            alebo grafikom a rozprávali sme sa, ako sa tvorí rozprávka.
            Vymysleli sme novú rozprávku a sami sme si ju ilustrovali.
            Pripravili sme krátke rozprávkové predstavenie. Vytvorili sme
            animované obrázky. Zahrali sme si hru Filmové plátno.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ marginLeft: "0", marginRight: "auto" }}>
            {isAdded && <h6>✔ Odborka bola pridana</h6>}
          </div>
          <div>
            <Button
              style={{ backgroundColor: btnColor, borderColor: btnColor }}
              onClick={addItem}
            >
              <strong>{btnText}</strong>
            </Button>
            <Button variant="light" onClick={closeCardModal}>
              Zavriet
            </Button>
          </div>
        </Modal.Footer>
      </>
    );
  };

  const show = showCardModal || showLoginModal;

  return (
    <>
      <Row>
        <LeftColumn setShowCardModal={setShowCardModal} />
        <RightColumn />
        {show && (
          <Modal
            show={showCardModal}
            onHide={showLoginModal ? closeLoginModal : closeCardModal}
            centered
          >
            {showLoginModal && (
              <AuthModal onHide={closeLoginModal} onlyBody title="omg" />
            )}
            {!showLoginModal && <CardModal />}
          </Modal>
        )}
      </Row>
    </>
  );
};

export default OdborkyPage;
