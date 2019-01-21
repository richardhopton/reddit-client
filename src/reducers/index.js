import { combineReducers } from "redux";
import subreddit from "./subreddit";
import posts from "./posts";
import pagination from "./pagination";

export default combineReducers({
  subreddit,
  posts,
  pagination
});
