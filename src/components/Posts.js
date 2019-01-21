import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
