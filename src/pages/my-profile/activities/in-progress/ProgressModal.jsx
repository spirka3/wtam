import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdEmail } from "react-icons/all";

const ProgressModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
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
        <Button variant="success">
          Odoslať <MdEmail size={20} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProgressModal;
