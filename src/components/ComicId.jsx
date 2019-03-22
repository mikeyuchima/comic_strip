import React, { Component } from "react";
import Comic from "./Comic";

class ComicId extends Component {
  componentDidUpdate(prevProps) {
    if (
      parseInt(this.props.match.params.id) !== prevProps.currentIssue &&
      this.props.match.params.id
    ) {
      this.props.exactComic(this.props);
    }
  }
  render() {
    return (
      <div>
        <Comic
          title={this.props.comicData.title}
          date={this.props.comicData.date}
          issue={this.props.comicData.issue}
          img={this.props.comicData.img}
          transcript={this.props.comicData.transcript}
          latestIssue={this.props.latestIssue}
          currentIssue={this.props.currentIssue}
        />
      </div>
    );
  }
}

export default ComicId;
