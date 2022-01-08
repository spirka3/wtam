import React from "react";
import { ProgressBar } from "react-bootstrap";

const MyProgressBar = ({ waitingLen, doneLen, tasks }) => {
  const progressBarValue = (doneLen / tasks.length) * 100;
  const progressBarValue2 = ((doneLen + waitingLen) / tasks.length) * 100;

  if (progressBarValue === -1) {
    return (
      <div
        className="my-activity-progressbar"
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
          {`${doneLen}/${tasks.length}`}
        </div>
      </div>
    );
  }

  // return (
  //   <ProgressBar
  //     className="my-activity-progressbar"
  //     style={{
  //       height: "40px",
  //     }}
  //     now={progressBarValue}
  //     label={`${splneneTasky.length}/${tasks.length}`}
  //   />
  // );

  const getTitle1 = () => {
    if (doneLen === 1) {
      return `${doneLen} bod je schválený`;
    }
    if (doneLen < 5) {
      return `${doneLen} body sú na schválené`;
    }
    return `${doneLen} bodov je schválých`;
  };

  const getTitle2 = () => {
    if (waitingLen === 1) {
      return `${waitingLen} bod čaká na schválenie`;
    }
    if (waitingLen < 5) {
      return `${waitingLen} body čakajú na schválenie`;
    }
    return `${waitingLen} bodov čaká na schválenie`;
  };

  return (
    <ProgressBar
      className="my-activity-progressbar"
      style={{
        height: "40px",
        padding: "0",
      }}
    >
      <ProgressBar
        title={getTitle1()}
        now={progressBarValue}
        label={`${doneLen}/${tasks.length}`}
        style={{ backgroundColor: "#558776" }}
      />
      <ProgressBar
        title={getTitle2()}
        striped
        now={progressBarValue2}
        style={{ backgroundColor: "#EAE2B6" }}
      />
    </ProgressBar>
  );
};

export default MyProgressBar;
