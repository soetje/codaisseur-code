const initialState = {
  loading: true,
  posts: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_5_POSTS":
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      }

    case "START_LOADING":
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}
