import React, { Component } from "react";
import styles from "./styles.css";

export default class Start extends Component {
  constructor() {
    super();
    this.state = {
      subreddit: "oddlysatisfying"
    };
  }

  onHandleChange(event) {
    this.setState({ subreddit: event.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(this.state.subreddit);
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.headerName}>
            Enter the subreddit and click Go
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.picker}>
            /r/
            <input
              type="text"
              value={this.state.subreddit}
              onChange={this.onHandleChange.bind(this)}
            />
          </div>
          <button onClick={this.handleClick.bind(this)}>Go</button>
        </div>
      </div>
    );
  }
}
