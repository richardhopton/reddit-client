import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { chooseSubreddit, fetchPosts, gotoPage } from "../actions";
import Posts from "./Posts";
import styles from "./styles.css";

export class Subreddit extends Component {
  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    const { subreddit } = this.props.match.params;
    dispatch(chooseSubreddit(subreddit));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, subreddit, page } = this.props;
    if (prevProps.subreddit === subreddit && prevProps.page === page) return;

    dispatch(fetchPosts(subreddit, page));
  }

  onGotoFirstPageClick() {
    const { dispatch, subreddit } = this.props;
    dispatch(gotoPage(subreddit, ""));
  }

  onGotoNextPageClick() {
    const { dispatch, subreddit, posts } = this.props;
    const { name: page } = posts[posts.length - 1];
    dispatch(gotoPage(subreddit, page));
  }

  render() {
    const { subreddit, posts, isLoading, lastUpdated } = this.props;
    return (
      <div className={styles.subreddit}>
        <div className={styles.header}>
          <div className={styles.pagination}>
            <button
              className={styles.paginationButton}
              onClick={this.onGotoFirstPageClick.bind(this)}
            >
              First Page
            </button>
            <button
              className={styles.paginationButton}
              onClick={this.onGotoNextPageClick.bind(this)}
            >
              Next Page
            </button>
          </div>
          <div className={styles.headerName}>{subreddit}</div>
          {lastUpdated && (
            <div className={styles.lastUpdated}>
              Last updated: {new Date(lastUpdated).toLocaleTimeString()}
            </div>
          )}
        </div>
        <div className={styles.body}>
          {isLoading && posts.length === 0 && <h2>Loading...</h2>}
          {!isLoading && posts.length === 0 && <h2>Empty.</h2>}
          {posts.length > 0 && <Posts posts={posts} />}
        </div>
      </div>
    );
  }
}

Subreddit.propTypes = {
  subreddit: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapState(state) {
  const { subreddit, posts, pagination } = state;
  const { isLoading, lastUpdated, items } = posts[subreddit] || {
    isLoading: true,
    items: []
  };
  const page = pagination[subreddit] || "";

  return {
    subreddit,
    page,
    posts: items,
    isLoading,
    lastUpdated
  };
}

export default connect(mapState)(Subreddit);
