import React from "react";
import { Subreddit } from "../Subreddit";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { CHOOSE_SUBREDDIT } from "../../actions";

const props = {
  subreddit: "oddlysatisfying",
  posts: [{ title: "1" }, { title: "2" }],
  dispatch: () => {}
};

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("Subreddit renders expected snapshot", () => {
  const tree = renderer.create(<Subreddit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Check interactions
const setup = () => {
  const dispatch = jest.fn();
  const match = { params: { subreddit: "news" } };
  const start = shallow(
    <Subreddit {...props} dispatch={dispatch} match={match} />
  );

  return { dispatch, start };
};

test("Subreddit dispatches choose subreddit action on render", () => {
  const { dispatch, start } = setup();

  const expected = { type: CHOOSE_SUBREDDIT, subreddit: "news" };
  expect(dispatch).toHaveBeenCalledWith(expected);
});
