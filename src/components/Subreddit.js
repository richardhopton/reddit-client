import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { chooseSubreddit } from "../actions";
import styles from "./styles.css";

export class Subreddit extends Component {
  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    const { subreddit } = this.props.match.params;
    dispatch(chooseSubreddit(subreddit));
  }

  render() {
    const { subreddit, posts, isLoading, lastUpdated } = this.props;
    return (
      <div className={styles.subreddit}>
        <div className={styles.header}>
          <div className={styles.headerName}>{subreddit}</div>
        </div>
      </div>
    );
  }
}

Subreddit.propTypes = {
  subreddit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapState(state) {
  const { subreddit } = state;
  return {
    subreddit
  };
}

export default connect(mapState)(Subreddit);
