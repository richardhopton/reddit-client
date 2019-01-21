import * as actions from "../index";

test("chooseSubreddit action should produce expected result", () => {
  const action = actions.chooseSubreddit("news");

  const expected = { type: actions.CHOOSE_SUBREDDIT, subreddit: "news" };
  expect(action).toEqual(expected);
});

describe("fetchPosts action", () => {
  const getLoadingState = () => ({ posts: { news: { isLoading: true } } });
  const getLoadedState = () => ({ posts: { news: { isLoading: false } } });

  it("should fetch from expected url", () => {
    const action = actions.fetchPosts("news");
    fetch.mockResponse(
      JSON.stringify({ data: { children: [{ data: "1" }, { data: "2" }] } })
    );

    action(arg => arg(() => {}), getLoadedState);
    expect(fetch).toHaveBeenCalledWith(
      "https://www.reddit.com/r/news.json?count=25"
    );
  });

  it("should not fetch given already loading posts", () => {
    const action = actions.fetchPosts("news");

    action(arg => arg(), getLoadingState);
    expect(fetch).not.toHaveBeenCalledWith();
  });

  it("should produce expected dispatch given mock data", () => {
    const action = actions.fetchPosts("news");
    const dispatch = jest.fn();
    fetch.mockResponse(
      JSON.stringify({ data: { children: [{ data: "1" }, { data: "2" }] } })
    );

    let promise;
    action(arg => (promise = arg(dispatch)), getLoadedState);
    promise.then(() => {
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

test("gotPage action should produce expected result", () => {
  const action = actions.gotoPage("news", "page2");

  const expected = {
    type: actions.GOTO_PAGE,
    subreddit: "news",
    page: "page2"
  };
  expect(action).toEqual(expected);
});
