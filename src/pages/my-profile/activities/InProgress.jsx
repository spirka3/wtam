import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";

const InProgress = () => {
  const [showCardModal, setShowCardModal] = useState(false);
  const closeCardModal = () => setShowCardModal(false);

  const CardModal = () => {
    return (
      <Modal show={showCardModal} onHide={closeCardModal} centered>
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
        <Modal.Footer>
          <Button variant="light">Vymazat</Button>
          <Button variant="light">Zavriet</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const MyCard = ({ color, title, url }) => {
    const MyProgress = ({ now, label }) => {
      return (
        <div
          className="my-card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
          }}
          onClick={() => setShowCardModal()}
        >
          <img
            style={{
              height: "50px",
              // width: "10%",
              marginRight: "10px",
              marginLeft: "10px",
              marginBottom: "5%",
              opacity: "0.8",
              display: "inline-block",
            }}
            src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
            alt="First slide"
          />
          <div style={{ width: "calc(100% - 80px)" }}>
            <span>meno</span>
            <ProgressBar
              style={{
                height: "20px",
              }}
              now={now}
              label={label}
            />
          </div>
        </div>
      );
    };

    return (
      <Card>
        <Card.Header
          style={{
            padding: ".5rem",
            color: "white",
            // opacity: "0.8",
            backgroundSize: "cover",
            backgroundImage: `url('${url}')`,
          }}
        >
          <strong>{title}</strong>
        </Card.Header>
        <Card.Body>
          <MyProgress now={30} label={`3/8`} />
          <MyProgress now={10} label={`1/10`} />
          <MyProgress now={85} label={`7/8`} />
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <h3 style={{ marginTop: "1.15rem" }}>Rozpracovane</h3>
      <Row>
        <Col>
          <MyCard
            title="Odborky"
            number="1"
            url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          />
        </Col>
        <Col>
          <MyCard
            color="green"
            title="Vyzvy"
            number="3"
            url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          />
        </Col>
        <Col>
          <MyCard
            color="blue"
            title="Ocenenia"
            number="1"
            url="https://www.skauting.sk/wp-content/uploads/2019/01/skauting-program-najvyssie-ocenenie-medvedi-skaut-bttn.png"
          />
        </Col>
      </Row>
      {showCardModal && <CardModal />}
    </>
  );
};

export default InProgress;
