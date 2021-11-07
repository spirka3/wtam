import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({ children, show, onHide, centered }) => {
  return (
    <Modal show={show} onHide={onHide} centered={centered}>
      {children}
    </Modal>
  );
};

export default MyModal;
