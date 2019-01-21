import { combineReducers } from "redux";
import subreddit from "./subreddit";
import posts from "./posts";

export default combineReducers({
  subreddit,
  posts
});
