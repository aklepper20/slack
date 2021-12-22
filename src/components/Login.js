import React from "react";
import { Button } from "@mui/material";
import "../css/Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    //capture the user and use it throughout our app. So add react context to be able to use it in our app whenever.
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack logo"
        />
        <h1>Sign into Slack</h1>
        <p>slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
