import React from "react";
import { ProgressBar } from "react-bootstrap";

const MyProgressBar = ({ splneneTasky, tasks }) => {
  const prograssBarValue = (splneneTasky.length / tasks.length) * 100;
  console.log(prograssBarValue);

  if (prograssBarValue === 0) {
    return (
      <div
        className="mt-md-2 my-activity-progressbar"
        style={{
          height: "40px",
          backgroundColor: "#E9ECEF",
          borderRadius: "0.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            // width: "100%",
            fontSize: "0.75rem",
            paddingLeft: "5%",
          }}
        >
          {`${splneneTasky.length}/${tasks.length}`}
        </div>
      </div>
    );
  }
  return (
    <ProgressBar
      className="mt-md-2 my-activity-progressbar"
      style={{
        height: "40px",
      }}
      now={prograssBarValue}
      label={`${splneneTasky.length}/${tasks.length}`}
    />
  );
};

export default MyProgressBar;
