import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, togglePost } from "../features/posts/postSlice";
import {
  selectCompletedPosts,
  selectPendingPosts,
} from "../features/posts/selectors";

const PostList = React.memo(() => {
  const dispatch = useDispatch();

  const completedPosts = useSelector(selectCompletedPosts);
  const pendingPosts = useSelector(selectPendingPosts);

  return (
    <div>
      <h2>Completed Posts</h2>

      <ul>
        {completedPosts.map((post) => (
          <li key={post.id}>
            {post.title}

            <button
              className="toggle"
              onClick={() => dispatch(togglePost(post.id))}
            >
              Toggle
            </button>

            <button
              className="delete"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Pending Posts</h2>

      <ul>
        {pendingPosts.map((post) => (
          <li key={post.id}>
            {post.title}

            <button
              className="toggle"
              onClick={() => dispatch(togglePost(post.id))}
            >
              Toggle
            </button>

            <button
              className="delete"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PostList;