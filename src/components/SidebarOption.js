import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SidebarOption.css";
import db from "../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigation = useNavigate();

  //1. changes url
  //2. connects to the db
  //3. uses to url para(roomid) to fetch room details from the db

  const selectChannel = () => {
    //gets and pushes the id of the chat into the url bar, so we can go fetch the data from the specific room id
    if (id) {
      navigation(`/room/${id}`);
    } else {
      navigation("title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name...");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
  <hr />;
}

export default SidebarOption;
