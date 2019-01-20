import React from "react";
import Start from "../Start";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("Start renders expected snapshot", () => {
  const tree = renderer.create(<Start />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Check interactions
const setup = () => {
  const push = jest.fn();
  const history = { push };
  const start = shallow(<Start history={history} />);

  return { push, start };
};

test("Start pushes history with default url on button click", () => {
  const { push, start } = setup();

  start.find("button").simulate("click", { preventDefault: () => {} });

  expect(push).toHaveBeenCalledWith("oddlysatisfying");
});

test("Start pushes history with updated url on button click", () => {
  const { push, start } = setup();

  start.find("input").simulate("change", { target: { value: "news" } });
  start.find("button").simulate("click", { preventDefault: () => {} });

  expect(push).toHaveBeenCalledWith("news");
});
