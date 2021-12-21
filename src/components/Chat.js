import React from "react";
import "../css/Chat.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import InfoIcon from "@mui/icons-material/Info";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams();

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#general</strong>
            <StarRateIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon />
            Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
