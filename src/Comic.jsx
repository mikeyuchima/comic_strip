import React from "react";
import Strip from "./components/Strip";

const Comic = props => {
  console.log("POOP");
  return (
    <div className="App">
      <button type="button" onClick={props.prevComic} value="previous">
        Previous
      </button>
      <button type="button" onClick={props.nextComic} value="next">
        Next
      </button>
      <button type="button" onClick={props.randComic} value="random">
        Random
      </button>
      <Strip
        title={props.title}
        date={props.date}
        issue={props.issue}
        img={props.img}
      />
    </div>
  );
};

export default Comic;
