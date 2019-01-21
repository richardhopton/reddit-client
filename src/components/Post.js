import React, { Component } from "react";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";
import styles from "./styles.css";

export default class Post extends Component {
  render() {
    const {
      score,
      thumbnail,
      author,
      permalink: url,
      title,
      num_comments: commentCount
    } = this.props;
    return (
      <div className={styles.post}>
        <Thumbnail source={thumbnail} />
        <div className={styles.postText}>
          <div className={styles.author}>
            Submitted by:{" "}
            <a href={`//www.reddit.com/user/${author}`}>{author}</a>
          </div>

          <div className={styles.score}>Score: {score}</div>

          <div className={styles.title}>
            <a target="_blank" href={`//www.reddit.com${url}`}>
              {title}
            </a>
          </div>

          <div className={styles.comments}>
            <a target="_blank" href={`//www.reddit.com${url}`}>
              {`${commentCount} comments`}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  permalink: PropTypes.string.isRequired
};
