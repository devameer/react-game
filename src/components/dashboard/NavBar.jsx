import React, { Component } from "react";
import user_img from "../../assets/images/jeny.png";

export default class NavBar extends Component {
  render() {
    const { name, email } = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="dashboard-navbar">
        <div className="text">
          <div className="user">{name}</div>
          <div className="email">{email}</div>
          <a href="javascript:void(0)" onClick={this.props.logout}>
            Logout
          </a>
        </div>

        <img src={user_img} alt="user_img" className="user_img" />
      </div>
    );
  }
}
