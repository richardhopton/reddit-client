import { GOTO_PAGE } from "../actions";
import buildState from "./buildState";

export default (state = {}, action) => {
  switch (action.type) {
    case GOTO_PAGE:
      return buildState(state, {
        [action.subreddit]: action.page
      });
    default:
      return state;
  }
};
