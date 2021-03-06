import React, { useState } from "react";
import {
  Badge,
  Accordion,
  Form as BsForm,
  useAccordionButton,
  Button,
} from "react-bootstrap";
import { GiSandsOfTime, MdDelete } from "react-icons/all";
import Formik from "./Formik";
import MyProgressBar from "./MyProgressBar";
import axios from "axios";

const ProgressCard = ({ aktivita }) => {
  const { id, name, img_url: image, tasks } = aktivita;
  const [isSent, setIsSent] = useState(false);

  const [subTasks, setSubTasks] = useState({
    todo: tasks.filter((task) => task.task_state === "rozpracovane"),
    waiting: tasks.filter((task) => task.task_state === "nesplnene"),
    done: tasks.filter((task) => task.task_state === "splnene"),
  });

  const [selectedTasks, setSelectedTasks] = useState([]);
  const selectTask = (task) => {
    setIsSent(false);
    const foundTask = selectedTasks.find((t) => t.id === task.id);
    if (!foundTask) {
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id));
    }
    // console.log("task", task);
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
    <div
      className="my-card progress-card col-12"
      onClick={useAccordionButton(id)}
      style={{ cursor: "pointer" }}
    >
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="row">
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
            className={[
              "row mb-3 ml-1 mr-2",
              subTasks.waiting.length === 0 ? "none-subtasks-waiting" : "",
            ].join(" ")}
            onClick={useAccordionButton(id)}
            style={{ cursor: "pointer" }}
          >
            <MyProgressBar
              waitingLen={subTasks.waiting.length}
              doneLen={subTasks.done.length}
              tasks={tasks}
            />
            <span
              className="my-activity-badge"
              style={{
                display: subTasks.waiting.length ? "inline-block" : "none",
              }}
            >
              <Badge
                bg="warning"
                className="badge"
                title="Niektor?? body ??akaj?? na schv??lenie"
              >
                <GiSandsOfTime size={30} />
              </Badge>
            </span>
          </div>
          <Accordion.Collapse eventKey={id}>
            <div>
              <Accordion
                className="accordion-margin"
                defaultActiveKey="1"
                onClick={(e) => e.stopPropagation()}
              >
                {/* TO DO TASKS */}
                {subTasks.todo.length ? (
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{`Nesplnen?? (${subTasks.todo.length})`}</Accordion.Header>
                    <Accordion.Body style={{ cursor: "default" }}>
                      {subTasks.todo.map((task) => (
                        <BsForm.Check
                          key={task.id}
                          label={task.description}
                          onChange={() => selectTask(task)}
                        />
                      ))}
                      {selectedTasks.length ? (
                        <Formik
                          setIsSent={setIsSent}
                          setSubTasks={setSubTasks}
                          selectedTasks={selectedTasks}
                          setSelectedTasks={setSelectedTasks}
                        />
                      ) : null}
                      {isSent ? (
                        <h6 className="pt-3">??? Spr??va bola odoslan??</h6>
                      ) : null}
                    </Accordion.Body>
                  </Accordion.Item>
                ) : null}
                {/* WAITING TASK */}
                {subTasks.waiting.length ? (
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {`??akaj??ce na schv??lenie (${subTasks.waiting.length})`}
                      {isSent ? (
                        <div className="ml-4 circle pulse blue" />
                      ) : null}
                    </Accordion.Header>
                    <Accordion.Body style={{ cursor: "default" }}>
                      {subTasks.waiting.map((task) => (
                        <BsForm.Check
                          className="waiting-check"
                          checked
                          inactive
                          key={task.id}
                          label={task.description}
                          onChange={() => selectTask(task)}
                        />
                        // <li>{task.description}</li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ) : null}
                {/* COMPLETE TASKS */}
                {subTasks.done.length ? (
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>{`Splnen?? (${subTasks.done.length})`}</Accordion.Header>
                    <Accordion.Body style={{ cursor: "default" }}>
                      {subTasks.done.map((task) => (
                        <BsForm.Check
                          className="done-check"
                          checked
                          inactive
                          key={task.id}
                          label={task.description}
                          onChange={() => selectTask(task)}
                        />
                        // <li>{task.description}</li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ) : null}
                <Button
                  className="button-margin"
                  size="sm"
                  variant="danger"
                  onClick={deleteActivityHandle}
                  title="Vyma???? sa aj v??etky body, ktor?? boli splen??"
                >
                  Vymaza?? aktivitu{" "}
                  <MdDelete style={{ marginTop: "-0.25rem" }} />
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
