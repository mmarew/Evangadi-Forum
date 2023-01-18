import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>Login</div>
      <Link to="/signup">Sign up</Link>
    </>
  );
}

export default Login;
