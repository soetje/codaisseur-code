import React, { useEffect, useState } from "react"
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import { selectPosts, selectLoading } from "../store/posts/selectors"
import { fetchNext5Posts } from "../store/posts/actions"

export default function PostsFeed() {
  const dispatch = useDispatch()

  const loading = useSelector(selectLoading)
  const posts = useSelector(selectPosts)

  useEffect(() => {dispatch(fetchNext5Posts)}, [dispatch])

  return (
    <div>
      <h2>Recent posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
            {post.tags.map((tag) => {
              return (
                <React.Fragment key={tag.id}>
                  <p> {tag.tag}</p>
                </React.Fragment>
              )
            })}
          </div>
        )
      })}
      <p>
        {loading ? (
          "Loading"
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}> more posts </button>
        )}
      </p>
    </div>
  )
}
