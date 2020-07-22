export function selectPosts(state) {
  console.log("state in reducder", state.posts.posts)
  return state.posts.posts
}

export function selectLoading(state) {
  return state.posts.loading;
}

