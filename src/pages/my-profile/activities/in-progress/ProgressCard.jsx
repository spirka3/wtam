import React, { useEffect, useState } from "react";
import {
  Badge,
  ProgressBar,
  Accordion,
  Form as BsForm,
  useAccordionButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { GiSandsOfTime, IoIosAttach, MdEmail } from "react-icons/all";
import axios from "axios";
import { Form, Form as F, Input } from "../../../../components/MyForm";
import ProgressModal from "./ProgressModal";
import UploadButton from "./UploadButton";

// TODO: rozdelit body na tri kategorie -> cakajuce na schvalenie, splnene a nesplnene

const ProgressCard = ({ now, aktivita }) => {
  const { id, name, img_url: image, activity_type: type, tasks } = aktivita;

  const [selectedTasks, setSelectedTasks] = useState([]);

  const selectTask = (task) => {
    const foundTask = selectedTasks.find((t) => t.id === task.id);
    if (!foundTask) {
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id));
    }
    console.log("task", task);
  };

  // 1 - Rozpracovana -> Nesplnenea (default po pridani, alebo zamietnuta veducim)
  const rozpracovaneTasky = tasks
    .filter((task) => task.task_state === "rozpracovane")
    .map((task) => {
      return (
        <BsForm.Check
          label={task.description}
          onChange={() => selectTask(task)}
        />
      );
    });

  // 2 - Nesplnena -> Rozpracovana (cakajuca na schvalenie)
  const nesplneneTasky = tasks
    .filter((task) => task.task_state === "nesplnene")
    .map((task) => {
      return <li>{task.description}</li>;
    });

  // 3 - Splnena -> Splnena (schvalena veducim)
  const splneneTasky = tasks
    .filter((task) => task.task_state === "splnene")
    .map((task) => {
      return <li>{task.description}</li>;
    });

  const prograssBarValue = (splneneTasky.length / tasks.length) * 100;
  console.log(prograssBarValue);

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
              now={prograssBarValue}
              label={`${splneneTasky.length}/${tasks.length}`}
            />
            <span className="my-activity-badge mt-md-2">
              <Badge bg="warning">
                <GiSandsOfTime size={30} />
              </Badge>
            </span>
          </div>
          <Accordion.Collapse eventKey={id}>
            <div>
              {/* <p>{allTasks}</p> */}
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{`Nesplnené(${rozpracovaneTasky.length})`}</Accordion.Header>
                  <Accordion.Body>{rozpracovaneTasky}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{`Čakajúce na schválenie(${nesplneneTasky.length})`}</Accordion.Header>
                  <Accordion.Body>{nesplneneTasky}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>{`Splnené(${splneneTasky.length})`}</Accordion.Header>
                  <Accordion.Body>{splneneTasky}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {selectedTasks.length ? (
                <div>
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
                  </Form>
                  <div style={{ display: "flex", marginBottom: "1rem" }}>
                    <Button
                      variant="success"
                      style={{ height: "36px", marginRight: "1rem" }}
                    >
                      Poslať
                    </Button>
                    <UploadButton />
                  </div>
                </div>
              ) : null}
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
