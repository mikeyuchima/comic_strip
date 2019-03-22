import React from "react";
import { Link } from "react-router-dom";
import Share from "./Share";

const Strip = props => (
  <div className="Strip">
    <h1>
      {props.title} #{props.issue}
      <Link
        to={`/${Math.floor(Math.random() * Math.floor(props.latestIssue - 1)) +
          1}`}
      >
        <button className="random" type="button">
          <i class="fas fa-random" />
        </button>
      </Link>
    </h1>
    <div className="image-direction">
      <Link to={`/${props.currentIssue - 1}`}>
        <button className="direction" type="button">
          {`<`}
        </button>
      </Link>
      <img src={props.img} />
      <Link to={`/${props.currentIssue + 1}`}>
        <button className="direction" type="button">
          {`>`}
        </button>
      </Link>
    </div>
    <span className="Description">
      Published: {props.date}
      <Share />
    </span>
    <p id="transcript">{props.transcript}</p>
  </div>
);

export default Strip;
