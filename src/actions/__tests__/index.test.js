import * as actions from "../index";

test("chooseSubreddit action should produce expected result", () => {
  const action = actions.chooseSubreddit("news");

  const expected = { type: actions.CHOOSE_SUBREDDIT, subreddit: "news" };
  expect(action).toEqual(expected);
});

describe("fetchPosts action", () => {
  it("should fetch from expected url", () => {
    const action = actions.fetchPosts("news");

    action(() => {});
    expect(fetch).toHaveBeenCalledWith(
      "https://www.reddit.com/r/news.json?count=25"
    );
  });

  it("should produce expected dispatch given mock data", () => {
    const action = actions.fetchPosts("news");
    const dispatch = jest.fn();
    fetch.mockResponse(
      JSON.stringify({ data: { children: [{ data: "1" }, { data: "2" }] } })
    );

    action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          posts: ["1", "2"],
          subreddit: "news",
          type: actions.PARSE_POSTS
        })
      );
    });
  });
});
