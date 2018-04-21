import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard/Dashboard";
import FileShare from '../../containers/FileShare/FileShare';
import "./Main.css";

class Main extends Component {
  render() {
    return <main className="Main">
        <Route path="/" component={Dashboard} exact />
        <Route path="/file-share" component={FileShare} />
      </main>;
  }
}

export default Main;
