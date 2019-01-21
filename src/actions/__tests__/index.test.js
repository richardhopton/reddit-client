import * as actions from "../index";

test("chooseSubreddit produces expected action signature", () => {
  const action = actions.chooseSubreddit("news");

  const expected = { type: actions.CHOOSE_SUBREDDIT, subreddit: "news" };
  expect(action).toEqual(expected);
});
