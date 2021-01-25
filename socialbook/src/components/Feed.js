import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import WallPosts from "./WallPosts";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <WallPosts />

      <Post
      /* profilePic={pic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image} */
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
