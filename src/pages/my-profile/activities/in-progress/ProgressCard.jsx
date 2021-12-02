import React from "react";
import { Badge, ProgressBar } from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/all";

const ProgressCard = ({ now, label, openModal }) => {
  return (
    <div className="my-card progress-card col-12" onClick={openModal}>
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col-4 col-md-4">
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
            </div>
            <div className="col-8 col-md-8">
              <div className="d-inline-block pl-4">
                <h3 className="mb-3">Meno aktivity</h3>
                <p>typ aktivity</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
