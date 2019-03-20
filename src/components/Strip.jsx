import React from "react";

const Strip = props => (
  <div>
    <h1> {props.title} </h1>
    <h2> {props.date} </h2>
    <h3> {props.issue} </h3>
    <img src={props.img} />
  </div>
);

export default Strip;
