import React, { useEffect, useState } from "react";
import {
  Badge,
  ProgressBar,
  Accordion,
  Form,
  useAccordionToggle,
  Button,
} from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/all";
import axios from "axios";

// TODO: rozdelit body na tri kategorie -> cakajuce na schvalenie, splnene a nesplnene

const ProgressCard = ({ now, label, aktivita }) => {
  const { id, name, img_url: image, activity_type: type, tasks } = aktivita;

  const allTasks = tasks.map((task) => {
    return <Form.Check label={task.description} />;
  });

  return (
    <div className="my-card progress-card col-12">
      <div className="row">
        <div onClick={useAccordionToggle(id)} className="col-12 col-md-5">
          <div className="row">
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
          <div className="row mb-3 ml-1 mr-">
            <ProgressBar
              className="mt-md-2 my-activity-progressbar"
              style={{
                height: "40px",
              }}
              now={now}
              label={label}
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
              <Button>Odoslat</Button>
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
