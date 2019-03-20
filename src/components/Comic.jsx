import React from "react";
import Strip from "./Strip";

const Comic = props => {
  console.log("POOP");
  return (
    <div className="App">
      <Strip
        title={props.title}
        date={props.date}
        issue={props.issue}
        img={props.img}
        transcript={props.transcript}
      />
      <button type="button" onClick={props.prevComic} value="previous">
        Previous
      </button>
      <button type="button" onClick={props.randComic} value="random">
        Random
      </button>
      <button type="button" onClick={props.nextComic} value="next">
        Next
      </button>
    </div>
  );
};

export default Comic;
