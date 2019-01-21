import reducer from "../posts";
import * as actions from "../../actions";

describe("posts reducer", () => {
  it("should return default when called without known type", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle PARSE_POSTS action", () => {
    const date = Date.now();
    expect(
      reducer("", {
        type: actions.PARSE_POSTS,
        subreddit: "news",
        posts: ["1", "2"],
        lastUpdated: date
      })
    ).toEqual({
      news: { isLoading: false, items: ["1", "2"], lastUpdated: date }
    });
  });

  it("should handle LOAD_POSTS action", () => {
    expect(
      reducer("", {
        type: actions.LOAD_POSTS,
        subreddit: "news"
      })
    ).toEqual({
      news: { isLoading: true, items: [] }
    });
  });
});
