import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Dashboard";
import React from "react";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/dashboard/Home";
import UserShow from "./pages/users/Show";
import UsersList from "./pages/users/List";
class App extends React.Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      this.setState({ isAuthorized: true });
    }
    if (user) {
      const { isAdmin } = JSON.parse();
      if (isAdmin === true) {
        this.setState({ isAdmin: true });
      } else {
        this.setState({ isAdmin: false });
      }
    }
  }
  login = (user) => {
    this.setState({ isAuthorized: true });
    if (user.isAdmin) this.setState({ isAdmin: true });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    this.setState({ isAuthorized: false });
  };
  render() {
    return (
      <div className="App">
        <Routes>
          <Route index="true" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login login={(e) => this.login(e)} />
                )}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Register login={(e) => this.login(e)} />
                )}
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
                admin={this.state.isAdmin}
              >
                <DashboardHome />
              </Dashboard>
            }
          ></Route>
          <Route
            path="/dashboard/profile"
            element={
              <>
                <Profile admin={this.state.isAdmin} />
              </>
            }
          />
          <Route
            path="/dashboard/users/:id"
            element={
              this.state.isAdmin ? (
                <Dashboard
                  isAuthorized={this.state.isAuthorized}
                  logout={this.logout}
                  admin={this.state.isAdmin}
                >
                  <UserShow />
                </Dashboard>
              ) : (
                ""
              )
            }
          />
          <Route
            path="/dashboard/users"
            element={
              this.state.isAdmin ? (
                <Dashboard
                  isAuthorized={this.state.isAuthorized}
                  logout={this.logout}
                  admin={this.state.isAdmin}
                >
                  <UsersList />
                </Dashboard>
              ) : (
                ""
              )
            }
          />{" "}
          <Route path="*" element={<h1>page not found 404</h1>} />
        </Routes>
        {/* <Auth /> */}
      </div>
    );
  }
}

export default App;
