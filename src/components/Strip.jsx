import React from "react";

const Strip = props => (
  <div className="Strip">
    <h1> {props.title} </h1>
    <img src={props.img} />
    <span className="Description">
      Date Released: {props.date} Issue# {props.issue}
    </span>
    <p id="transcript">{props.transcript}</p>
  </div>
);

export default Strip;
