import React, { useEffect, useState } from "react";
import {
  Badge,
  ProgressBar,
  Accordion,
  Form as BsForm,
  useAccordionButton,
  Button,
} from "react-bootstrap";
import { GiSandsOfTime, MdEmail } from "react-icons/all";
import axios from "axios";
import { Form, Form as F, Input } from "../../../../components/MyForm";
import OdborkaModal from "../../../odborky/section/odborka/OdborkaModal";
import ProgressModal from "./ProgressModal";

// TODO: rozdelit body na tri kategorie -> cakajuce na schvalenie, splnene a nesplnene

const ProgressCard = ({ now, aktivita }) => {
  const { id, name, img_url: image, activity_type: type, tasks } = aktivita;

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  const selectTask = (task) => {
    const foundTask = selectedTasks.find((t) => t.id === task.id);
    if (!foundTask) {
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id));
    }
    console.log("task", task);
  };

  const allTasks = tasks.map((task) => {
    return (
      <BsForm.Check
        label={task.description}
        onChange={() => selectTask(task)}
      />
    );
  });

  return (
    <div className="my-card progress-card col-12">
      <div className="row">
        <div className="col-12 col-md-5">
          <div
            className="row"
            onClick={useAccordionButton(id)}
            style={{ cursor: "pointer" }}
          >
            <div className="col-4 col-md-4">
              <img
                style={{
                  width: "100px",
                  height: "90px",
                  marginBottom: "2rem",
                  display: "inline",
                }}
                src={image}
                alt="First slide"
              />
            </div>
            <div className="col-8 col-md-8">
              <div className="d-inline-block pl-4">
                <h3 className="mb-3">{name}</h3>
                <p>{type}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div
            className="row mb-3 ml-1 mr-"
            onClick={useAccordionButton(id)}
            style={{ cursor: "pointer" }}
          >
            <ProgressBar
              className="mt-md-2 my-activity-progressbar"
              style={{
                height: "40px",
              }}
              now={now}
              label={`0/${tasks.length}`}
            />
            <span className="my-activity-badge mt-md-2">
              <Badge bg="warning">
                <GiSandsOfTime size={30} />
              </Badge>
            </span>
          </div>
          <Accordion.Collapse eventKey={id}>
            <div>
              <p>{allTasks}</p>
              {selectedTasks.length ? (
                <Form>
                  <hr />
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>
                    Úlohy ti musí overiť vedúci
                  </p>
                  <Input
                    as="textarea"
                    name="password"
                    label=""
                    placeholder="Ako dôkaz mu môžeš poslať pár slov, prípadne vložiť fotky"
                    required
                  />
                  <div style={{ display: "flex", marginBottom: "1rem" }}>
                    <Button
                      variant="success"
                      style={{ height: "36px", marginRight: "1rem" }}
                    >
                      Poslať
                    </Button>
                    {/*<BsForm.Label>Pridať prílohu</BsForm.Label>*/}
                    <BsForm.Control type="file" multiple />
                  </div>
                </Form>
              ) : null}
              {/*<Button onClick={toggleModal}>Odoslat</Button>*/}
            </div>
          </Accordion.Collapse>
        </div>
      </div>
      {showModal && <ProgressModal show={showModal} />}
    </div>
  );
};

export default ProgressCard;
