import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./Start";
import styles from "./styles.css";

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div className={styles.root}>
          <Route path="/" exact component={Start} />
        </div>
      </Router>
    );
  }
}
