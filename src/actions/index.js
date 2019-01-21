export const CHOOSE_SUBREDDIT = "CHOOSE_SUBREDDIT";
export const PARSE_POSTS = "PARSE_POSTS";

export const chooseSubreddit = subreddit => ({
  type: CHOOSE_SUBREDDIT,
  subreddit
});

const parsePosts = (subreddit, postsJson) => ({
  type: PARSE_POSTS,
  subreddit,
  posts: postsJson.data.children.map(post => post.data),
  lastUpdated: Date.now()
});

export const fetchPosts = subreddit => dispatch => {
  return fetch(`https://www.reddit.com/r/${subreddit}.json?count=25`)
    .then(response => response.json())
    .then(json => dispatch(parsePosts(subreddit, json)));
};
