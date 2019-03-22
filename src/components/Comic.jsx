import React from "react";
import Strip from "./Strip";
import { Link } from "react-router-dom";

const Comic = props => (
  <div className="App">
    <Strip
      title={props.title}
      date={props.date}
      issue={props.issue}
      img={props.img}
      transcript={props.transcript}
    />
    <button type="button">
      <Link to={`/${props.currentIssue - 1}`}>Previous</Link>
    </button>
    <button type="button" value="random">
      <Link
        to={`/${Math.floor(Math.random() * Math.floor(props.latestIssue - 1)) +
          1}`}
      >
        Random
      </Link>
    </button>
    <button type="button">
      <Link to={`/${props.currentIssue + 1}`}>Next</Link>
    </button>
  </div>
);

export default Comic;
