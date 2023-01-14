import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Home from "../components/dashboard/Home";
import SideBar from "../components/dashboard/SideBar";
import NavBar from "../components/dashboard/NavBar";
const Dashboard = (props) => {
  const [theme, setTheme] = React.useState("default");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <>
      {props.isAuthorized ? (
        <>
          <div className={`control_panel theme-${theme}`}>
            <SideBar theme={theme} changeTheme={() => changeTheme()} />
            <div className="bar"></div>
            <NavBar logout={() => props.logout()} />
            <main className="content">
              {props.children}
            </main>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Dashboard;
