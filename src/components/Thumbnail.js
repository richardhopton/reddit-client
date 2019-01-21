import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

export default class Thumbnail extends Component {
  constructor() {
    super();
    this.state = { errored: false };
  }

  handleError(event) {
    this.setState({ errored: true });
  }

  render() {
    if (this.state.errored) {
      return null;
    } else {
      const { source } = this.props;
      return (
        <div className={styles.thumbnail}>
          <img
            className={styles.thumbnailImage}
            src={source}
            onError={this.handleError.bind(this)}
          />
        </div>
      );
    }
  }
}

Thumbnail.propTypes = {
  source: PropTypes.string
};
