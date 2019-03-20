import React, { Component } from "react";
import Comic from "./Comic";

class ComicId extends Component {
  componentDidMount() {
    this.props.exactComic(this.props);
  }
  render() {
    return (
      <div>
        <Comic
          title={this.props.comicData.title}
          date={this.props.comicData.date}
          issue={this.props.comicData.issue}
          img={this.props.comicData.img}
          prevComic={this.props.nextComic}
          nextComic={this.props.nextComic}
          randComic={this.props.nextComic}
        />
      </div>
    );
  }
}

export default ComicId;
