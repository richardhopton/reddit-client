import React from "react";
import Thumbnail from "../Thumbnail";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  source: "test"
};

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("renders expected snapshot", () => {
  const tree = renderer.create(<Thumbnail {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
