import reducer from "../subreddit";
import { CHOOSE_SUBREDDIT } from "../../actions";

describe("subreddit reducer", () => {
  it("should return default when called without known type", () => {
    expect(reducer(undefined, {})).toEqual("");
  });

  it("should handle CHOOSE_SUBREDDIT action", () => {
    expect(reducer("", { type: CHOOSE_SUBREDDIT, subreddit: "news" })).toEqual(
      "news"
    );
  });
});
