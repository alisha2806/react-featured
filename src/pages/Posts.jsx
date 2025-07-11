import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 1).map((post) => (
        <div key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
