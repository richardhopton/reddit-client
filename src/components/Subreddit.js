import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { chooseSubreddit, fetchPosts } from "../actions";
import styles from "./styles.css";

export class Subreddit extends Component {
  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    const { subreddit } = this.props.match.params;
    dispatch(chooseSubreddit(subreddit));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, subreddit } = this.props;
    if (prevProps.subreddit === subreddit) return;

    dispatch(fetchPosts(subreddit));
  }

  render() {
    const { subreddit, posts, lastUpdated } = this.props;
    return (
      <div className={styles.subreddit}>
        <div className={styles.header}>
          <div className={styles.headerName}>{subreddit}</div>
          {lastUpdated && (
            <div className={styles.lastUpdated}>
              Last updated: {new Date(lastUpdated).toLocaleTimeString()}
            </div>
          )}
        </div>
        <div className={styles.body}>
          {posts.length === 0 && <h2>Empty.</h2>}
          {posts.length > 0 && posts.map((post,i) => (
            <div key={i}>
              {post.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Subreddit.propTypes = {
  subreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapState(state) {
  const { subreddit, posts } = state;
  const { lastUpdated, items } = posts[subreddit] || {
    items: []
  };

  return {
    subreddit,
    posts: items,
    lastUpdated
  };
}

export default connect(mapState)(Subreddit);
