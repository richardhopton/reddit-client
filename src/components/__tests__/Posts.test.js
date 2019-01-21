import React from "react";
import Posts from "../Posts";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  posts: [
    {
      id: 1,
      title: "1",
      name: "post1",
      score: 1,
      author: "user1",
      num_comments: 1,
      permalink: "http://1"
    },
    {
      id: 2,
      title: "2",
      name: "post2",
      score: 2,
      author: "user2",
      num_comments: 2,
      permalink: "http://2"
    }
  ]
};

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("renders expected snapshot", () => {
  const tree = renderer.create(<Posts {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
