import React from "react";
import Post from "../Post";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  id: 1,
  title: "1",
  name: "post1",
  score: 1,
  author: "user1",
  num_comments: 1,
  permalink: "http://1"
};

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("renders expected snapshot", () => {
  const tree = renderer.create(<Post {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
