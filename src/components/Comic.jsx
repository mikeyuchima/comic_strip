import React from "react";
import Strip from "./Strip";

const Comic = props => (
  <div className="App">
    <Strip
      title={props.title}
      date={props.date}
      issue={props.issue}
      img={props.img}
      transcript={props.transcript}
      currentIssue={props.currentIssue}
      latestIssue={props.latestIssue}
    />
  </div>
);

export default Comic;
