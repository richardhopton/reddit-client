import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, i) => (
          <div key={i}>{post.title}</div>
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
