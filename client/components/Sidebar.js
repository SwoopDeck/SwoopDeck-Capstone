import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import items from "../../public/sidebarItems.json";
import SidebarItem from "./SidebarItem";
import { logout } from "../store";
import { dzLogout } from "../store/dzAuth";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  function loggingOut() {
    dispatch(logout());
    dispatch(dzLogout());
  }

  return (
    <div className="main">
      <div className="sidebar">
        <div className="user-avatar"></div>
        <div className="user-name">
          {props.user.firstName} {props.user.lastName}
        </div>
        <hr></hr>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}

        <i className="bi bi-box-arrow-right">
          <button className="logout-btn" onClick={loggingOut}>
            Logout
          </button>
        </i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
