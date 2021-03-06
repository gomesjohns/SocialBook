import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./WallPosts.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";
import db from "../firebase";

function WallPosts() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //DB
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="wallPosts">
      <div className="wallPosts__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="wallPosts_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
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
