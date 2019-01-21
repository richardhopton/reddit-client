import reducer from "../posts";
import { PARSE_POSTS } from "../../actions";

describe("posts reducer", () => {
  it("should return default when called without known type", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle PARSE_POSTS action", () => {
    const date = Date.now();
    expect(
      reducer("", {
        type: PARSE_POSTS,
        subreddit: "news",
        posts: ["1", "2"],
        lastUpdated: date
      })
    ).toEqual({ news: { items: ["1", "2"], lastUpdated: date } });
  });
});
