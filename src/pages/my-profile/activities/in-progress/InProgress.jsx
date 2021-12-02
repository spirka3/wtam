import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ProgressCard from "./ProgressCard";
import ProgressModal from "./ProgressModal";

const InProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <Row className="mt-2 mt-md-4">
      <ProgressCard now={30} label={`3/8`} openModal={toggleModal} />
      <ProgressCard now={10} label={`1/10`} openModal={toggleModal} />
      <ProgressCard now={85} label={`7/8`} openModal={toggleModal} />
      <ProgressCard now={85} label={`7/8`} openModal={toggleModal} />
      {showModal && <ProgressModal show={showModal} onHide={toggleModal} />}
    </Row>
  );
};

export default InProgress;
