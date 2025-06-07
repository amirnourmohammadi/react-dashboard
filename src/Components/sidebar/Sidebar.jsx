import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarListItem active">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/newUsers" className="link">
              <li className="sideBarListItem">
                <StorefrontIcon className="sidebarIcon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sideBarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sideBarListItem">
              <BarChartIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sideBarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>

            <li className="sideBarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Feedback
            </li>

            <li className="sideBarListItem">
              <MessageOutlinedIcon className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <BusinessCenterIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
