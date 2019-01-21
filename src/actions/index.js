export const CHOOSE_SUBREDDIT = "CHOOSE_SUBREDDIT";
export const LOAD_POSTS = "LOAD_POSTS";
export const PARSE_POSTS = "PARSE_POSTS";
export const GOTO_PAGE = "GOTO_PAGE";

export const chooseSubreddit = subreddit => ({
  type: CHOOSE_SUBREDDIT,
  subreddit
});

const loadPosts = subreddit => ({
  type: LOAD_POSTS,
  subreddit
});

const parsePosts = (subreddit, postsJson) => ({
  type: PARSE_POSTS,
  subreddit,
  posts: postsJson.data.children.map(post => post.data),
  lastUpdated: Date.now()
});

const actualFetchPosts = (subreddit, page) => dispatch => {
  dispatch(loadPosts(subreddit));
  const pagination = !page || page == "" ? "" : `&after=${page}`;
  return fetch(
    `https://www.reddit.com/r/${subreddit}.json?count=25${pagination}`
  )
    .then(response => response.json())
    .then(json => dispatch(parsePosts(subreddit, json)));
};

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.posts[subreddit];
  return !posts || !posts.isLoading;
};

export const fetchPosts = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(actualFetchPosts(subreddit));
  }
};

export const gotoPage = (subreddit, page) => ({
  type: GOTO_PAGE,
  subreddit,
  page
});
