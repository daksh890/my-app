import React from "react";
import PostData from "../src/posts/posts.json";

function PostList() {
  return (
    <div>
      <h1>Hello There!!</h1>
      {PostData.map((detail, index) => {
        return (
          <div>
            <h3>{detail.title}</h3>
            <p>{detail.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
