import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginlogo from "../assets/images/loginlogo.png";
import joystick from "../assets/images/joystick.png";
import google from "../assets/images/google.svg";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.svg";
import linked from "../assets/images/linked.png";
import Button from "../components/Button";
import axios from "axios";
import * as yup from "yup";

const Login = (props) => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = React.useState({});

  const [errors, setErrors] = React.useState([]);

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(3).required(),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          username: formData.username,
          password: formData.password,
        },
        { abortEarly: false }
      )
      .then(async ({ username, password }) => {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/users/login`,
            {
              email: username,
              password: password,
            }
          );
          if (response) {
            const { email, isAdmin, name, token } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem(
              "user",
              JSON.stringify({ email, isAdmin, name })
            );
            props.login({ email, isAdmin, name });
            // navigateTo("/dashboard");
          }
        } catch (error) {
          console.log(error);
          setErrors([error.response.data.message]);
        }
      })

      .catch(function (err) {
        setErrors(err.errors || [err.message]);
      });
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="login">
      <div className="login_desc">
        <img src={loginlogo} alt="loginlogo" className="loginlogo" />

        <div className="symbol_login">،،</div>
        <p className="game_desc_login">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <div className="gamer_login">Hideo Kojima</div>
        <img src={joystick} alt="joystick" className="joystick" />
      </div>

      <form className="login_form pt-30" onSubmit={(e) => handleSubmit(e)}>
        <div className="login_title">
          <h3 className="form_login_title">Join the game!</h3>
          <p className="form_login_desc">
            Go inside the best gamers social network!
          </p>
        </div>
        <div className="social-login-links">
          <a href="/#">
            <img src={google} alt="google" className="gooogle" />
          </a>
          <a href="/#">
            <img src={twitter} alt="tweitter" className="tweitter" />
          </a>
          <a href="/#">
            <img src={linked} alt="linked" className="linked" />
          </a>
          <a href="/#">
            <img src={github} alt="github" className="github" />
          </a>
        </div>

        <div className="form-group">
          <label htmlFor="username">Your username</label>
          <input
            id="username"
            type="username"
            className="form-control"
            placeholder="Write your username"
            onChange={(e) => handleChangeInput(e)}
            value={formData.username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Enter your password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="•••••••••"
            onChange={(e) => handleChangeInput(e)}
            value={formData.password}
          />
        </div>

        <Button myBtn={"Login"} />
        <div className="reg_anchor">
          Don’t have an account?
          <Link to="/register">Register</Link>
        </div>
        {errors?.length
          ? errors.map((error) => (
              <p className="error" key={error}>
                {error}
              </p>
            ))
          : null}
      </form>
    </div>
  );
};
export default Login;
