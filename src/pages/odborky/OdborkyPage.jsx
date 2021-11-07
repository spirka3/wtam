import React, { useState } from "react";
import { Row, Button, Modal, Card } from "react-bootstrap";

import "./index.css";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import { useAuthContext } from "../../providers/AuthProvider";
import AuthModal from "../../components/modals/AuthModal";

const OdborkyPage = () => {
  const { auth } = useAuthContext();

  const [showCardModal, setShowCardModal] = useState(undefined);
  const closeCardModal = () => setShowCardModal(undefined);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);

  const addItem = () => {
    if (auth.token) {
      console.log("mas to");
    } else {
      console.log("naskor sa prihlas");
      setShowLoginModal(true);
    }
  };

  const CardModal = () => {
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
          {/* todo set section for the button */}
          <Button
            style={{ backgroundColor: "#F2E272", borderColor: "#F2E272" }}
            onClick={addItem}
          >
            <strong>Pridat odborku</strong>
          </Button>
          <Button variant="light" onClick={closeCardModal}>
            Zavriet
          </Button>
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
            {showLoginModal && <AuthModal onHide={closeLoginModal} onlyBody />}
            {!showLoginModal && <CardModal />}
          </Modal>
        )}
      </Row>
    </>
  );
};

export default OdborkyPage;
