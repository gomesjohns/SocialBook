import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="./Images/socialBook_logo.png" alt="socialbook logo" />
        <img
          class="sbText"
          src="./Images/socialBook_text.png"
          alt="socialbook logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Log In
      </Button>
    </div>
  );
}

export default Login;
