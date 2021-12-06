import React, { useState } from "react";
import {
  Badge,
  ProgressBar,
  Accordion,
  Form as BsForm,
  useAccordionButton,
  Button,
} from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/all";
import Formik from "./Formik";
import MyProgressBar from "./MyProgressBar";
import axios from "axios";

// TODO: rozdelit body na tri kategorie -> cakajuce na schvalenie, splnene a nesplnene

const ProgressCard = ({ aktivita }) => {
  const { id, name, img_url: image, activity_type: type, tasks } = aktivita;

  const [subTasks, setSubTasks] = useState({
    todo: tasks.filter((task) => task.task_state === "rozpracovane"),
    waiting: tasks.filter((task) => task.task_state === "nesplnene"),
    done: tasks.filter((task) => task.task_state === "splnene"),
  });

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

  const deleteActivityHandle = () => {
    axios
      .post("api/remove-activity", {
        user_id: 10,
        activity_id: id,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

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
                <i>Odborka</i>
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
            <MyProgressBar splneneTasky={subTasks.done} tasks={tasks} />
            <span
              className="my-activity-badge mt-md-2"
              style={{
                visibility: subTasks.waiting.length ? "visible" : "hidden",
              }}
            >
              <Badge bg="warning" className="badge">
                <GiSandsOfTime size={30} />
              </Badge>
            </span>
          </div>
          <Accordion.Collapse eventKey={id}>
            <div>
              <Accordion className="accordion-margin" defaultActiveKey="1">
                {/* TO DO TASKS */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{`Nesplnené(${subTasks.todo.length})`}</Accordion.Header>
                  <Accordion.Body>
                    {subTasks.todo.map((task) => (
                      <BsForm.Check
                        key={task.id}
                        label={task.description}
                        onChange={() => selectTask(task)}
                      />
                    ))}
                    {selectedTasks.length ? (
                      <Formik
                        setSubTasks={setSubTasks}
                        selectedTasks={selectedTasks}
                        setSelectedTasks={setSelectedTasks}
                      />
                    ) : null}
                  </Accordion.Body>
                </Accordion.Item>
                {/* WAITING TASK */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{`Čakajúce na schválenie(${subTasks.waiting.length})`}</Accordion.Header>
                  <Accordion.Body>
                    {subTasks.waiting.map((task) => (
                      <li>{task.description}</li>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                {/* DONE TASKS */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>{`Splnené(${subTasks.done.length})`}</Accordion.Header>
                  <Accordion.Body>
                    {subTasks.done.map((task) => (
                      <li>{task.description}</li>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Button
                  className="button-margin"
                  variant="danger"
                  onClick={deleteActivityHandle}
                >
                  Vymazať aktivitu
                </Button>
              </Accordion>
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
