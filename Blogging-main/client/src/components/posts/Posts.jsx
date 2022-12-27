import React from 'react'
import Post from '../post/Post'
import './Posts.css'
const Posts = ({ posts }) => {
 
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}


export default Posts