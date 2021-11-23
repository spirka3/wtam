import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import {
  CgSandClock,
  GiSandsOfTime,
  MdEmail,
  MdOutlineMailOutline,
} from "react-icons/all";

const InProgress = () => {
  const [showCardModal, setShowCardModal] = useState(false);
  const closeCardModal = () => setShowCardModal(false);

  const CardModal = () => {
    return (
      <Modal show={showCardModal} onHide={closeCardModal} centered>
        <Modal.Header
          closeButton
          style={{
            textAlign: "center",
          }}
        >
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => console.log("clicked")}
              type="checkbox"
              label="Prečítali sme si rozprávkovú obrázkovú knihu alebo komiks a vieme"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => console.log("clicked")}
              type="checkbox"
              label="Vyrobili sme si kostým alebo model našej obľúbenej"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => console.log("clicked")}
              type="checkbox"
              label="kreslenej postavičky. Stretli sme sa s animátorom, ilustrátorom"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => console.log("clicked")}
              type="checkbox"
              defaultChecked="checked"
              className="checked-state"
              label="Vymysleli sme novú rozprávku a sami sme si ju ilustrovali"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => console.log("clicked")}
              type="checkbox"
              defaultChecked="checked"
              className="checked-state"
              label="Pripravili sme krátke rozprávkové predstavenie"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="light">Vymazat</Button>
          <Button variant="success">
            Poslat <MdEmail size={20} />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const MyCard = ({ color, title, url }) => {
    const MyProgress = ({ now, label }) => {
      return (
        <div
          className="my-card progress-card"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem 1.5rem 0 1.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "white",
          }}
          onClick={() => setShowCardModal(true)}
        >
          <div>
            <img
              style={{
                width: "100px",
                height: "90px",
                marginBottom: "2rem",
                display: "inline",
              }}
              src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
              alt="First slide"
            />
            <div className="d-inline-block mx-5">
              <h3 className="mb-3">Meno aktivity</h3>
              <p>typ aktivity</p>
            </div>
          </div>

          <div>
            <ProgressBar
              className="mt-2"
              style={{
                height: "40px",
                width: "600px",
              }}
              now={now}
              label={label}
            />
          </div>
          <span className="mt-2 ml-1">
            <Badge bg="warning">
              <GiSandsOfTime size={30} />
            </Badge>
          </span>
        </div>
      );
    };

    return (
      <div>
        <MyProgress now={30} label={`3/8`} />
        <MyProgress now={10} label={`1/10`} />
        <MyProgress now={85} label={`7/8`} />
        <MyProgress now={85} label={`7/8`} />
      </div>
    );
  };

  return (
    <Row style={{ marginTop: "3rem" }}>
      <MyCard
        title="Odborky"
        number="1"
        url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
      />
      {showCardModal && <CardModal />}
    </Row>
  );
};

export default InProgress;
