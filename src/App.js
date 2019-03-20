import React, { Component } from "react";
import "./App.css";
import { getCurrentStrip, getNextStrip } from "./methods/fetch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./components/Comic";
import ComicId from "./components/ComicId";

class App extends Component {
  constructor() {
    super();
    this.state = {
      latestIssue: "",
      currentIssue: "",
      comicData: {}
    };
  }

  componentDidMount() {
    console.log("componentdidmount");
    getCurrentStrip.then(comicData => {
      this.setState({
        comicData,
        latestIssue: comicData.issue,
        currentIssue: comicData.issue
      });
    });
  }

  getComic = issue => {
    getNextStrip(issue)
      .then(comicData => {
        this.setState({ comicData, currentIssue: comicData.issue });
      })
      .catch(err => {
        console.error("Error", err);
        alert("comic doesn't exist");
      });
  };

  nextComic = e => {
    let action = e.target.value;
    switch (action) {
      case "previous":
        let prev = this.state.currentIssue - 1;
        this.getComic(prev);
        break;

      case "next":
        let next = this.state.currentIssue + 1;
        this.getComic(next);
        break;

      case "random":
        let random =
          Math.floor(Math.random() * Math.floor(this.state.latestIssue - 1)) +
          1;
        this.getComic(random);
        break;

      default:
        break;
    }
  };

  Comic = ({ match }) => {
    console.log("COMIC", match.params.id);
    this.getComic(match.params.id);
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Comic
                title={this.state.comicData.title}
                date={this.state.comicData.date}
                issue={this.state.comicData.issue}
                img={this.state.comicData.img}
                transcript={this.state.comicData.transcript}
                prevComic={this.nextComic}
                nextComic={this.nextComic}
                randComic={this.nextComic}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={props => (
              <ComicId
                comicData={this.state.comicData}
                prevComic={this.nextComic}
                nextComic={this.nextComic}
                randComic={this.nextComic}
                exactComic={this.Comic}
                {...props}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

const NoMatch = () => (
  <div>
    <h1>DOES NOT EXISTS</h1>
  </div>
);
