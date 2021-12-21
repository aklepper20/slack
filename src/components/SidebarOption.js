import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigation = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigation(`/room/${id}`);
    } else {
      navigation("title");
    }
  };

  const addChannel = () => {};
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
