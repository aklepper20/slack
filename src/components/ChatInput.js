import React, { useState } from "react";
import "../css/ChatInput.css";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ChatInput({ channelName, channelId }) {
  console.log(channelId);
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    //keep track of what user types
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          placeholder={`Message #${channelName?.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
