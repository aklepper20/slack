import React from "react";
import "../css/Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AccountCircleIcon className="header__avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search for a chat, thread or conversation..." />
      </div>
      <div className="header__right">
        <HelpIcon />
      </div>
    </div>
  );
}

export default Header;
