import { CHOOSE_SUBREDDIT } from "../actions";

export default (state = "", action) => {
  switch (action.type) {
    case CHOOSE_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};
