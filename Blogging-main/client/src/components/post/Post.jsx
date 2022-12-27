import React from "react";
import { NavLink } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
    const PF = "https://mkm-blogs.herokuapp.com/images/";
    return (
      <div className="post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <NavLink to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}</span>
          </NavLink>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    );
  }

export default Post;
