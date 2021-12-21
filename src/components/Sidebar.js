import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const sidebarObj = [
  { Icon: InsertCommentIcon, title: "Threads" },
  { Icon: InboxIcon, title: "Mentions & reactions" },
  { Icon: DraftsIcon, title: "Saved items" },
  { Icon: BookmarkBorderIcon, title: "Channel Browser" },
  { Icon: PeopleAltIcon, title: "People & user groups" },
  { Icon: AppsIcon, title: "People & user groups" },
  { Icon: FileCopyIcon, title: "File browser" },
  { Icon: ExpandLessIcon, title: "Show less" },
];
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Workspace</h2>
          <h3>
            <FiberManualRecordIcon />
            Aly Baez
          </h3>
        </div>
        <CreateIcon />
      </div>
      {sidebarObj.map((obj, index) => (
        <SidebarOption key={index} Icon={obj.Icon} title={obj.title} />
      ))}
      {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" /> */}
    </div>
  );
}

export default Sidebar;