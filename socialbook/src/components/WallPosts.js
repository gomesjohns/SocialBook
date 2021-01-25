import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./WallPosts.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function WallPosts() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //DB

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="wallPosts">
      <div className="wallPosts__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="wallPosts_input"
            placeholder={"What's on your mind?"}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"Image URL (Optional)"}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="wallPosts__bottom">
        <div className="wallPosts__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="wallPosts__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/ Video</h3>
        </div>
        <div className="wallPosts__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/ Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default WallPosts;
