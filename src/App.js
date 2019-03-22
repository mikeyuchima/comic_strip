import React, { Component } from "react";
import "./App.css";
import { getCurrentStrip, getNextStrip } from "./methods/fetch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComicId from "./components/ComicId";
import NoMatch from "./components/NoMatch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      latestIssue: "",
      currentIssue: "",
      issueCounter: {},
      comicData: {}
    };
  }

  componentDidMount() {
    getCurrentStrip.then(comicData => {
      this.setState({
        comicData,
        latestIssue: comicData.issue,
        currentIssue: comicData.issue
      });
    });
  }

  getComic = issue => {
    getNextStrip(issue.match.params.id)
      .then(comicData => {
        let issue = comicData.issue;
        let issueCounter = this.state.issueCounter;
        issueCounter[issue] = issueCounter[issue] + 1 || 1;
        this.setState({ comicData, currentIssue: issue, issueCounter });
        console.log("state", comicData);
      })
      .catch(err => {
        console.error("Error", err);
        alert("comic doesn't exist");
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ComicId
                comicData={this.state.comicData}
                latestIssue={this.state.latestIssue}
                currentIssue={this.state.currentIssue}
                exactComic={this.getComic}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={props => (
              <ComicId
                comicData={this.state.comicData}
                latestIssue={this.state.latestIssue}
                currentIssue={this.state.currentIssue}
                exactComic={this.getComic}
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
