import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../createStore";
import Start from "./Start";
import Subreddit from "./Subreddit";
import styles from "./styles.css";

const store = createStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={styles.root}>
            <Route path="/" exact component={Start} />
            <Route path="/:subreddit" component={Subreddit} />
          </div>
        </Router>
      </Provider>
    );
  }
}
