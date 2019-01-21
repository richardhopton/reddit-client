import { PARSE_POSTS } from "../actions";
import buildState from "./buildState";

export default (state = {}, action) => {
  switch (action.type) {
    case PARSE_POSTS:
      return buildState(state, {
        [action.subreddit]: buildState(state[action.subreddit], {
          items: action.posts,
          lastUpdated: action.lastUpdated
        })
      });
    default:
      return state;
  }
};
