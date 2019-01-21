import { LOAD_POSTS, PARSE_POSTS } from "../actions";
import buildState from "./buildState";

const subredditPosts = (state = { isLoading: false, items: [] }, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return buildState(state, {
        isLoading: true
      });
    case PARSE_POSTS:
      return buildState(state, {
        isLoading: false,
        items: action.posts,
        lastUpdated: action.lastUpdated
      });
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS:
    case PARSE_POSTS:
      return buildState(state, {
        [action.subreddit]: subredditPosts(state[action.subreddit], action)
      });
    default:
      return state;
  }
};
