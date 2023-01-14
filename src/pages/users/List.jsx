import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class UserList extends Component {
  state = {
    allUsers: [],
    isLoading: true,
    isDeleting: false,
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      this.setState({ allUsers: res.data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      this.setState({ isDeleting: true });
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.setState({
          allUsers: this.state.allUsers.filter((user) => user._id !== id),
        });
        this.setState({ isDeleting: false });
      } catch (error) {
        console.log(error);
        this.setState({ isDeleting: false });
      }
    }
  };

  render() {
    return (
      <div className="all_users">
        <ol className="users_list">
          <div className="user_title">All Users</div>
          {this.state.isLoading
            ? "Loading .. "
            : this.state.isDeleting
            ? "Deleting.."
            : this.state.allUsers.map((user) => (
                <li className="user_card" key={user._id}>
                  <NavLink className="email-link" to={`${user._id}`}>
                    <p>{user.email}</p>
                  </NavLink>

                  <button
                    className="delete"
                    onClick={() => this.handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
        </ol>
      </div>
    );
  }
}
