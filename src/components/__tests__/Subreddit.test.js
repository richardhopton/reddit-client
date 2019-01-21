import React from "react";
import { Subreddit } from "../Subreddit";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { CHOOSE_SUBREDDIT, GOTO_PAGE } from "../../actions";

const props = {
  subreddit: "oddlysatisfying",
  posts: [
    {
      title: "1",
      name: "post1"
    },
    {
      title: "2",
      name: "post2"
    }
  ],
  isLoading: false,
  page: "",
  dispatch: () => {}
};

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("renders expected snapshot", () => {
  const tree = renderer.create(<Subreddit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Check interactions
const setup = (subreddit = "oddlysatisfying") => {
  const dispatch = jest.fn();
  const match = { params: { subreddit } };
  const wrapper = shallow(
    <Subreddit {...props} dispatch={dispatch} match={match} />
  );

  return { dispatch, wrapper };
};

test("dispatches choose subreddit action on render", () => {
  const { dispatch } = setup("news");

  const expected = { type: CHOOSE_SUBREDDIT, subreddit: "news" };
  expect(dispatch).toHaveBeenCalledWith(expected);
});

test("clicking First Page button should dispatch goto page with empty page", () => {
  const { dispatch, wrapper } = setup();

  const expected = { type: GOTO_PAGE, subreddit: "oddlysatisfying", page: "" };
  wrapper
    .find("button")
    .at(0)
    .simulate("click");
  expect(dispatch).toHaveBeenCalledWith(expected);
});

test("clicking Next Page button should dispatch goto page with last item name", () => {
  const { dispatch, wrapper } = setup();

  const expected = {
    type: GOTO_PAGE,
    subreddit: "oddlysatisfying",
    page: "post2"
  };
  wrapper
    .find("button")
    .at(1)
    .simulate("click");
  expect(dispatch).toHaveBeenCalledWith(expected);
});
