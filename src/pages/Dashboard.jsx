import React, { Component } from "react";

import Game from "../sections/Game";
import LastPlayed from "../sections/LastPlayed";

import newGame from "../assets/images/newgame.svg";
import like from "../assets/images/like.png";
import Settings from "../assets/images/Settings.png";
import Puzzle from "../assets/images/Puzzle.png";
import light from "../assets/images/light.png";
import user_img from "../assets/images/jeny.png";
import GODOFWAR2 from "../assets/images/GODOFWAR2.png";
import SPIDERMAN from "../assets/images/SPIDERMAN.png";
import SUPERMAN2 from "../assets/images/SUPERMAN2.png";
import play1 from "../assets/images/play1.png";
import play2 from "../assets/images/play2.png";
import play3 from "../assets/images/play3.png";
import play4 from "../assets/images/play4.png";
import trophy from "../assets/images/trophy.png";
import win from "../assets/images/win.png";
import winFrame from "../assets/images/winframe.png";
import FRIENDS from "../assets/images/FRIENDS.png";

const Dashboard = () => {
  const [theme, setTheme] = React.useState("default");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`control_panel theme-${theme}`}>
      <div className="side_bar">
        <a href="/#">
          <img src={newGame} className="new_game" alt="new_game" />
        </a>

        <div className="icons">
          <a href="/#">
            <img src={like} className="like" alt="like" />
          </a>
          <a href="/#">
            <img src={Settings} className="setting" alt="setting" />
          </a>
          <a href="/#">
            <img src={Puzzle} className="comment" alt="comment" />
          </a>
        </div>

        <button
          className={`btn_theme ${
            theme === "default" ? "btn_theme-default" : "btn_theme-dark"
          }`}
          onClick={() => changeTheme(theme === "default" ? "dark" : "default")}
        >
          <img src={light} className="theme" alt="theme" />
        </button>
      </div>
      <div className="bar"></div>
      <main className="content">
        <div className="user">Welcome back, Jenny!</div>
        <img src={user_img} alt="user_img" className="user_img" />

        <div className="game">
          <h1 className="game_title">NEW GAMES </h1>
          <div className="games">
            <Game
              cardBg={GODOFWAR2}
              desc={
                "Join in the new DLC with Kratos to learn more about him and his future."
              }
            />
            <Game
              cardBg={SUPERMAN2}
              desc={
                "Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
              }
            />
            <Game
              cardBg={SPIDERMAN}
              desc={
                "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
              }
              direction={"direction"}
            />
          </div>
        </div>

        <div className="last_games">
          <div className="played_list">
            <h3 className="last_played">last played</h3>

            <div className="list_played">
              <LastPlayed gameImg={play1} palyInfo={"Hogwarts Legacy 50%"} />
              <LastPlayed
                gameImg={play2}
                palyInfo={"God Of War: Ragnarök 72.5%"}
              />
              <LastPlayed
                gameImg={play3}
                palyInfo={"Crash Bandicoot N. Sane Trilogy 34%"}
              />
              <LastPlayed
                gameImg={play4}
                palyInfo={"Dying Light 2 Stay Human 100%"}
              />
            </div>
          </div>
          <div className="main_trophy">
            <h3 className="tropyh_title">most recent trophy </h3>
            <div className="trophy">
              <img src={trophy} alt="trophy" className="trophy_img" />
              <img src={win} alt="win" className="win" />
              <img src={winFrame} alt="winFrame" className="win_shadow" />
              <p className="trophy_desc">
                perfect KILL streak
                <span className="trophy_desc_2">You are in the 0.5%</span>
              </p>
              <p className="last_time">
                assassin's creed odyssey
                <span className="last_time_2">last played: 34 hours ago</span>
              </p>
            </div>
          </div>
          <div className="friends">
            <p>friends</p>
            <img src={FRIENDS} alt="friends" className="friends_img" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
