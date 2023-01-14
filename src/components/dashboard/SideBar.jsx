import React, { Component } from "react";
import SettingsIcon from "../icons/SettingsIcon";
import LikeIcon from "../icons/LikeIcon";
import PuzzleIcon from "../icons/PuzzleIcon";

import newGame from "../../assets/images/newgame.svg";
import light from "../../assets/images/light.png";
export default class SideBar extends Component {
  render() {
    return (
      <div className="side_bar">
        <a href="/#">
          <img src={newGame} className="new_game" alt="new_game" />
        </a>

        <div className="icons">
          <a href="/#">
            <LikeIcon />
          </a>
          <a href="/#">
            <SettingsIcon />
          </a>
          <a href="/#">
            <PuzzleIcon />
          </a>
        </div>

        <button
          className={`btn_theme ${
            this.props.theme === "default" ? "btn_theme-default" : "btn_theme-dark"
          }`}
          onClick={() =>
            this.props.changeTheme(this.props.theme === "default" ? "dark" : "default")
          }
        >
          <img src={light} className="theme" alt="theme" />
        </button>
      </div>
    );
  }
}
