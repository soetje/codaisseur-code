import axios from "axios"
const API_URL = `https://codaisseur-coders-network.herokuapp.com`

export function startLoading() {
  return {
    type: "START_LOADING",
  }
}

export function postsFetched(morePosts) {
  return {
    type: "FETCHED_5_POSTS",
    payload: morePosts,
  }
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading())

  const offset = getState().posts.posts.length

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`)

  const morePosts = res.data.rows

  dispatch(postsFetched(morePosts))
}
