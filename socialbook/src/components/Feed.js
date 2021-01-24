import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import WallPosts from "./WallPosts";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <WallPosts />
      {/* StoryReel */}
    </div>
  );
}

export default Feed;
